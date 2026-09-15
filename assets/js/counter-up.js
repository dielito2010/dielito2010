$(document).ready(function(){

    function runCounters(){
        $('.count').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 5000,
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum + '+');
            }
          });
        });
    }

    var counting = document.querySelector('.counting');

    if (counting && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries, obs) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    runCounters();
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        observer.observe(counting);
    } else {
        runCounters();
    }

});
