// Menu To Drop Down
window.selectnav=function(){return function(p,q){var a,h=function(b){var c;b||(b=window.event);b.target?c=b.target:b.srcElement&&(c=b.srcElement);3===c.nodeType&&(c=c.parentNode);c.value&&(window.location.href=c.value)},k=function(b){b=b.nodeName.toLowerCase();return"ul"===b||"ol"===b},l=function(b){for(var c=1;document.getElementById("selectnav"+c);c++){}return b?"selectnav"+c:"selectnav"+(c-1)},n=function(b){g++;var c=b.children.length,a="",d="",f=g-1;if(c){if(f){for(;f--;){d+=r}d+=" "}for(f=0;f<c;f++){var e=b.children[f].children[0];if("undefined"!==typeof e){var h=e.innerText||e.textContent,i="";j&&(i=-1!==e.className.search(j)||-1!==e.parentElement.className.search(j)?m:"");s&&!i&&(i=e.href===document.URL?m:"");a+='<option value="'+e.href+'" '+i+">"+d+h+"</option>";t&&(e=b.children[f].children[1])&&k(e)&&(a+=n(e))}}1===g&&o&&(a='<option value="">'+o+"</option>"+a);1===g&&(a='<select class="selectnav" id="'+l(!0)+'">'+a+"</select>");g--;return a}};if((a=document.getElementById(p))&&k(a)){document.documentElement.className+=" js";var d=q||{},j=d.activeclass||"active",s="boolean"===typeof d.autoselect?d.autoselect:!0,t="boolean"===typeof d.nested?d.nested:!0,r=d.indent||"\u2192",o=d.label||"- Navigation -",g=0,m=" selected ";a.insertAdjacentHTML("afterend",n(a));a=document.getElementById(l());a.addEventListener&&a.addEventListener("change",h);a.attachEvent&&a.attachEvent("onchange",h)}}}();
 eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(4($){$.y=$.y||{};$.y.T={3:{l:1,A:1,R:\'x\',E:b,u:8,J:8,13:1m,1l:8,14:b,H:1k,M:1j}};$.p.1n=4(3){7 3=$.1o({},$.y.T.3,3);6.1s(4(){$(6).q(\'r\',1i U($(6),3))});i 6};$.p.1q=4(){$(6).q(\'r\').l()};$.p.1p=4(){$(6).q(\'r\').D()};$.p.1g=4(W){$(6).q(\'r\').f(W-1,b)};4 U(e,3){7 c=6;7 s=$(\'.1c:n\',e);7 B=$(\'.1f:n\',e);7 h=B.1e();7 v=$(\'.1d:n\',e);7 w=$(\'.1r:n\',e);7 C=$(\'.u:n\',e);7 m,d,5,o,z,t=b,g=3.R==\'x\';4 18(){m=g?$(h[0]).O(b):$(h[0]).X(b);7 S=k.Q(((g?s.O():s.X())/(m*3.A))-1);d=k.V(1,k.Q(h.j/3.A)-S);5=k.1J(d,k.V(1,3.l))-2;B.1L(g?\'1F\':\'1E\',(m*h.j));s.1y().Z(g?\'\':\'1x\');c.f(1);Y();i c};4 Y(){9(3.E&&w.j>0&&v.j>0){w.F(4(){c.f(-1);i 8});v.F(4(){c.f(1);i 8})}9(3.J){e.1v(c.D,c.l)}9(3.u&&C.j>0){$(\'a\',C).F(17)}};4 12(){9(3.E){w.N(\'P\',!(5>0));v.N(\'P\',!(5+1<d))}9(3.u){7 I=$(\'.10\',C);I.1I(\'16\');$(I[5]).Z(\'16\')}};4 17(1C){9($(6).1D(\'10\')){c.f(1A(6.1z),b)}i 8};4 K(){9(3.J&&!z){11(o);o=1w(4(){5=5+1==d?-1:5;t=5+1==d?8:5==0?b:t;c.f(t?1:-1)},3.13)}};6.D=4(){11(o);z=b};6.l=4(){z=8;K()};6.f=4(L,15){5=15?L:5+=L;9(5>-1&&5<d){7 G={};G[g?\'1K\':\'1G\']=-(5*(m*3.A));B.D().1H(G,{1u:8,H:3.14?3.H:0,1h:"1b",1a:4(){9(19 3.M==\'4\')3.M.1t(6,h[5],5)}});12();K()}};i 18()}})(1B);',62,110,'|||options|function|iCurrent|this|var|false|if||true|oSelf|iSteps|root|move|bAxis|oPages|return|length|Math|start|iPageSize|first|oTimer|fn|data|tcl|oViewport|bForward|pager|oBtnNext|oBtnPrev||tiny|bPause|display|oContent|oPager|stop|controls|click|oPosition|duration|oNumbers|interval|setTimer|iDirection|callback|toggleClass|outerWidth|disable|ceil|axis|iLeftover|carousel|Carousel|max|iNum|outerHeight|setEvents|addClass|pagenum|clearTimeout|setButtons|intervaltime|animation|bPublic|active|setPager|initialize|typeof|complete|swing|viewport|next|children|overview|tinycarousel_move|easing|new|null|1000|rewind|3000|tinycarousel|extend|tinycarousel_stop|tinycarousel_start|prev|each|call|queue|hover|setTimeout|vertical|parent|rel|parseInt|jQuery|oEvent|hasClass|height|width|top|animate|removeClass|min|left|css'.split('|'),0,{}))
//<![CDATA[    
(function (a) {
    a.wdxnewpost = function (c, b) {
        var d = this;
        d.$el = a(c);
        d.init = function () {
            d.options = a.extend({}, a.wdxnewpost.defaultOptions, b);
            d.$el.html('<div class="wdxtaglistco ' + d.options.postType + '"><ul class="wdxnewponew"></ul></div>').addClass(d.options.loadingClass);
            a.get((d.options.blogURL === "" ? window.location.protocol + "//" + window.location.host : d.options.blogURL) + "/feeds/posts/default" + (d.options.tagName === false ? "" : "/-/" + d.options.tagName) + "?max-results=" + d.options.MaxPost + "&orderby=published&alt=json-in-script", function (B) {
                var E, h, D, r, H, t, G, s, q, w, F, y, C, n = "",
                    f = B.feed.entry;
                if (f !== undefined) {
                    for (var z = 0, p = f.length; z < p; z++) {
                        for (var x = 0, v = f[z].link.length; x < v; x++) {
                            if (f[z].link[x].rel == "alternate") {
                                E = f[z].link[x].href;
                                break
                            }
                        }
                        for (var u = 0, A = f[z].link.length; u < A; u++) {
                            if (f[z].link[u].rel == "replies" && f[z].link[u].type == "text/html") {
                                H = f[z].link[u].title.split(" ")[0];
                                break
                            }
                        }
                        D = ("content" in f[z]) ? f[z].content.$t : ("summary" in f[z]) ? f[z].summary.$t : "";
                        var e = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
                        t = a("<div></div>").append(D.replace(e, ""));
                        G = t.find("img");
                        if ("media$thumbnail" in f[z]) {
                            s = f[z].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/" + d.options.ImageSize);
                            if (f[z] === f[0] && d.options.postType !== "s") {
                                s = f[z].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/" + d.options.FirstImageSize)
                            } else {
                                if (f[z].media$thumbnail.url.indexOf("img.youtube.com") != -1) {
                                    s = f[z].media$thumbnail.url.replace("default", "0")
                                }
                            }
                        } else {
                            if (G.length != 0) {
                                s = G[0].src
                            } else {
                                s = d.options.pBlank
                            }
                        }
                        D = D.replace(/<\S[^>]*>/g, "");
                        if (D.length > d.options.Summarylength) {
                            D = D.substring(0, d.options.Summarylength) + "..."
                        }
                        h = f[z].title.$t;
                        C = f[z].published.$t.substring(0, 10);
                        q = C.substring(0, 4);
                        w = C.substring(5, 7);
                        F = C.substring(8, 10);
                        y = d.options.MonthNames[parseInt(w, 10) - 1];
                        n += '<li class="a' + z + '"><div class="inner" ><a title="' + h + '" class="imagethubnailwithtagin" href="' + E + '"><img src="' + s + '"/></a><strong><a href="' + E + '">' + h + '</a></strong><div class="info">' + (d.options.ShowDate === true ? '<span id="dayclass">' + y + " " + F + ", " + q + "</span>" : "") + (d.options.ShowComment === true ? '<span id="comclass"><a href="' + E + '#comment-form">' + H + "</a> Comment(s)</span>" : "") + "</div><p " + (d.options.ShowDesc === false ? "" : 'style="display:block"') + ">" + D + "</p></div></li>"
                    }
                    a("ul", d.$el).append(n);
                    if (d.options.postType === "s") {
                        var o = a(c).parents(".widget");
                        var I = o.children("h2");
                        if (d.options.tagName != false) {
                            I.wrapInner('<a href="/search/label/' + encodeURIComponent(d.options.tagName) + '"/>')
                        }
                        var m, g;
                        var k = d.$el.width();
                        if (a(window).width() < 479) {
                            g = 1;
                            m = k / g
                        } else {
                            if (a(window).width() < 979) {
                                g = 2;
                                m = k / g
                            } else {
                                if (a(window).width() < 1025) {
                                    g = 3;
                                    m = k / g
                                } else {
                                    g = 4;
                                    m = k / g
                                }
                            }
                        }
                        a(".wdxtaglistco", d.$el).flexslider({
                            animation: "slide",
                            selector: ".wdxnewponew > li",
                            animationLoop: true,
                            itemWidth: m,
                            minItems: 1,
                            move: g,
                            mousewheel: true,
                            maxItems: 3
                        });
                        d.$el.removeClass(d.options.loadingClass)
                    } else {                        
                    }
                    d.$el.removeClass(d.options.loadingClass)
                } else {
                    d.$el.html("<span>No result! Or Error Loading Feed</span>")
                }
            }, "jsonp")
        };
        d.init()
    };
    a.wdxnewpost.defaultOptions = {
        blogURL: "",
        MaxPost: 6,
        FirstImageSize: "s360-p",
        ImageSize: "s200-p",
        ShowDesc: false,
        ShowDate: true,
        ShowComment: true,
        Summarylength: 170,
        postType: "v",
        loadingClass: "loadingxxnewcontent",
        pBlank: "http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s72-c/grey.gif",
        MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        tagName: false
    };
    a.fn.wdxnewpost = function (b) {
        return this.each(function () {
            (new a.wdxnewpost(this, b))
        })
    }
})(jQuery);
//]]> 