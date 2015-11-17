var secondComp = ng.Component({
  selector: 'second-comp'
})
.View({
  templateUrl: 'second_comp.html'
})
.Class({
  constructor: function(){
    this.name="second component";    
    var scope = this;
    scope.showName = true;
    
    this.toggleShowName = function(event){
      event.preventDefault();
      scope.showName = !scope.showName;
      console.log("OK");
    }
  }
});

var firstComp = ng.Component({
  selector: 'first-comp'
})
.View({
  template: '<h1>Name {{ name }}</h1><second-comp></second-comp>',
  directives: [secondComp]
})
.Class({
  constructor: function(){
    this.name="first component";    
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ng.bootstrap(firstComp);
});