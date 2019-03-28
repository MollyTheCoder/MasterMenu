
    document.querySelectorAll('.is-dropleft').forEach(function(elem) {
        elem.addEventListener('mouseover', function(e){
            e.stopPropagation();
            
         
            var elemTop = ""
            if(e.currentTarget.classList.contains('menu-level-2')){
                elemTop = elem.offsetTop;
            }

            if(e.currentTarget.classList.contains('menu-level-3')){
                elemTop = elem.offsetTop + elem.parentNode.parentNode.offsetTop;
            }
            
               var targetElem = elem.querySelector('ul');
               
               var elemHeight = elem.offsetHeight
               var targetHeight = targetElem.offsetHeight
               var headerHeight = document.querySelector('.tools-navigation').offsetHeight + document.querySelector('.main-navigation').offsetHeight;
               var targetBottom = elemTop + headerHeight + targetHeight;        

console.log(elemTop)
               var isBigger = window.innerHeight - targetBottom - 100 < 0 ? true : false;
               var styleTop = targetHeight - elemHeight;

               
               if(isBigger) {
                  targetElem.style.top = "-" + styleTop + "px";
               } 
            
        })
    })