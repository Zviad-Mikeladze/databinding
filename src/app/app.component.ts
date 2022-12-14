import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'test', content: 'testing' }];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintrData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintrData.serverName,
      content: blueprintrData.serverContent,
    });
  }
  onFirstChange() {
    this.serverElements[0].name = 'Changed';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
