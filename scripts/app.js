var yike1 = angular.module("yike1",[]);
yike1.run(["$rootScope",function($rootScope){
	$rootScope.collapsed=false;
     $rootScope.toggle = function(){
     	// alert("aaa");
     	$rootScope.collapsed=!$rootScope.collapsed;
     	var dds = document.querySelectorAll(dd);
        if($rootScope.collapsed){
	     	for(var i=0;i<dds.length;i++){
	     	    dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				// dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '0.2s';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(0)';
	     	}
        }else{
        	for(var i=dds.length - 1; i>=0; i--) {
			dds[i].style.transitionDuration = (dds.length - i + 1) * 0.05 + 's';
			// dds[i].style.transitionProperty = 'all';
			dds[i].style.transitionDelay = '';
			dds[i].style.transitionTimingFunction = 'ease-out';
			dds[i].style.transform = 'translate(-100%)';
		    }
        }
     }
}])