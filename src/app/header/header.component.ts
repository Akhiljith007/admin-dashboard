import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // userdefined event creation

  // @output() - to share data from child to parent
@Output() onMenuBtnClick = new EventEmitter()

menubtnClicked(){

    // to occur an userdefined event

    this.onMenuBtnClick.emit()

    // to resize screen

    // means aa sidebar aa button click cheiyumpol disspaear aakundallo aa dissapear aakunna tymil aa graph inte widthcorrect aa full scrn inte widthedukkn aanu ingne cheiyunne

    // ingne cheithille sidebar pokumpo aa graph full width eduklla engne aano irunne athe widthil thanne irikum
    setTimeout(() => {
      window.dispatchEvent(
        new Event("resize")
      )
      
    }, 100);

  }

}
