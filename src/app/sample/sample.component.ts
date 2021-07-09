import { Component, OnInit } from '@angular/core';
import { createGitgraph, Orientation, TemplateName } from '@gitgraph/js';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const graphContainer = document.getElementById("gitgraph");
    if (graphContainer) {
      var gitgraph = createGitgraph(graphContainer, {
        template: TemplateName.BlackArrow,
        orientation: Orientation.Horizontal,
      });

      const main = gitgraph.branch("main");
      main.commit({ subject: "First Commit", author: "Parthiban Sekar" });
      main.commit({ subject: "Updated ReadMe", author: "Parthiban Sekar" });

      var develop = gitgraph.branch('develop');
      develop.commit({ subject: "Created develop branch from main", author: "Parthiban Sekar" });

      var pp6666 = gitgraph.branch('PP-6666');
      pp6666.commit({ subject: "Resolved dependency issues", author: "Krishna Schvani" });
      pp6666.commit({ subject: "Migrated to .Net Core 3.1", author: "Krishna Schvani" });
      develop.merge(pp6666);

      main.merge(develop);
    }

  }

}
