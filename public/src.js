var siteSource ="<html>\n" +
"\n" +
"  <!-- I am a limited-limiting content, please watch me on a desktop browser\n" +
"      for a full experience. -->\n" +
"\n" +
"  <head>\n" +
"      <!-- built by micah friedland.micah (at) gmail.com -->\n" +
"      <link rel='stylesheet' type='text/css' href='style.css'>\n" +
"      <script type='text/javascript' src='isMobile.js'></script>\n" +
"      <script type='text/javascript'>\n" +
"          if (window.mobileAndTabletcheck()) {\n" +
"              alert('I am a limited-limiting content, please watch me on a desktop browser for a full experience');\n" +
"          } else {\n" +
"              document.getElementsByTagName('body')[0].style.backgroundColor = 'white';\n" +
"              document.getElementsByTagName('video')[0].style.display = 'none';\n" +
"          }\n" +
"          function onLoad() {\n" +
"              document.getElementsByTagName('body')[0].style.backgroundColor = 'white';\n" +
"              document.getElementsByTagName('video')[0].style.display = 'none';\n" +
"          };\n" +
"      </script>\n" +
"      <script>\n" +
"          (function(i, s, o, g, r, a, m) {\n" +
"              i['GoogleAnalyticsObject'] = r;\n" +
"              i[r] = i[r] || function() {\n" +
"                  (i[r].q = i[r].q || []).push(arguments)\n" +
"              }, i[r].l = 1 * new Date();\n" +
"              a = s.createElement(o),\n" +
"                  m = s.getElementsByTagName(o)[0];\n" +
"              a.async = 1;\n" +
"              a.src = g;\n" +
"              m.parentNode.insertBefore(a, m)\n" +
"          })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n" +
"          ga('create', 'UA-96950157-1', 'auto');\n" +
"          ga('send', 'pageview');\n" +
"      </script>\n" +
"  </head>\n" +
"\n" +
"  <body>\n" +
"      <pre></pre>\n" +
"      <script type='text/javascript' src='src.js'>\n" +
"      </script>\n" +
"      <script>\n" +
"          document.getElementsByTagName('pre')[0].textContent = siteSource;\n" +
"      </script>\n" +
"      <video autoplay poster='black.jpg' loop onloadstart=onLoad()>\n" +
"              <source src='https://firebasestorage.googleapis.com/v0/b/axelle-aa1c6.appspot.com/o/nonesuch.mov?alt=media&token=bc90d00f-0481-4f11-96a0-b99809b5d7e5'>\n" +
"          </video>\n" +
"      <script type='text/javascript' src='video.js'></script>\n" +
"  </body>\n" +
"\n" +
"</html>"
