!function(){
	function o() {
		return {
			tips: "Please upgrade your browser to view this site properly. ",
			learnMoreURL: "https://williamsilvadev.github.io/help.html",
			learnMoreText: "Learn More. "
		};
	}

  function e(){
    var o='<div class="browser-error-dialog s-edit-modal" style="display:block; position: fixed; background-color:#e7e9eb ; width: 70%; left: 15%; bottom: 50px; text-align: center;">' +
          '<p style="padding: 30px; font-size: 140%;"><strong><span>${tips}</span><a href="${learnMoreURL}" target="_blank">${learnMoreText}</a></strong></p></div>';
    return o
  }

  function n(o,e){
    var n=-1,r=null;
    if (o && o.indexOf("MSIE")!==-1)
      r = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
    else if (e && "Netscape"===e && o.indexOf("Trident")!==-1)
      r = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
    
    if (r && null!==r.exec(o))
      n = window.parseInt(RegExp.$1);
    
    return n
  }

  function r(o){
    var e=-1,n=null;
    if (o && o.indexOf("Windows NT")!==-1)
      n = new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,});");
    
    if (n && null!==n.exec(o))
      e = window.parseInt(RegExp.$1);
    
    return e
  }

  function i(n,r){
    if (!$(".browser-error-dialog").length){
      var i=o(),
          t=i.tips,
          l=i.learnMoreURL,
          a=i.learnMoreText,
          s=e();
      
      $("body").append(s.replace("${tips}",t).replace("${learnMoreURL}",l).replace("${learnMoreText}",a));
      $(".browser-error-dialog").css("position","absolute");
      
      if (6===r) return;
      
      var w,d,p=window.parseInt($(".browser-error-dialog").css("bottom"));
      $(window).scroll(function(){
        window.clearTimeout(d);
        d=window.setTimeout(function(){
          w=0!==document.body.scrollTop?document.body.scrollTop:$(window).scrollTop();
          $(".browser-error-dialog").animate({bottom:p-w},"slow")
        },150)
      })
    }
  }

  function t(){
    var o=window && window.navigator && window.navigator.userAgent,
        e=window && window.navigator && window.navigator.appName,
        t=n(o,e),
        l=r(o);

    if (t!==-1){
      var a="";
      l<=10 && t<11 && (a="chrome");
      a && i(a,t)
    }
	
	//Remova o comtaria do bloco para fins de teste
	/* var a = ""; //Define um valor para "a"
	i(a, t); //Eixbe a mesagem */
  }

  function l(){
    window && t()
  }

  window.onload=l
}();
