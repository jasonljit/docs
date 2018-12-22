cs-cowork ('routes/cs.js')
	res.render("../server/node_modules/cs-cowork.pug", { username: req.user.username });

client-quick-path
	res.render("../server/node_modules/client-quick-path.pug", { conversationId: conversation._id });


// 右下角泡泡

var s = document.createElement('script');
s.src = "http://localhost:3005/js/chat-box.js";
var h = document.getElementsByTagName('head').item(0);
h.appendChild(s);

var c = document.createElement('link');
c.href = "http://localhost:3005/js/chat-box.css";
c.rel = "stylesheet";
h.appendChild(c);

