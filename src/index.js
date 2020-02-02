const RTSUCCESS = {
  "out": true
};
const RTFAIL = {
  "out": false
};
var RTDAT = {
    getid: function getid(ele) {
      return ele.id;
    },
    setid: function setid(ele,idname) {
      ele.setAttribute("id", idname)
      if(ele.id == idname) {
        return RTSUCCESS;
      } else {
        return RTFAIL;
      }
    },
    newp: function newp(data,appendedele) {
      var p = document.createElement('p');
      p.id = 'newprt';
      p.innerHTML = data;
      appendedele.appendChild(p);
      return p;
    },
    newele: function newele(data,type,appendedele) {
      var p = document.createElement(type);
      p.id = 'newprt';
      p.innerHTML = data;
      appendedele.appendChild(p);
      return p;
    }
}
function newrt() {
  eval("NodeList.prototype.rt={}")
  eval("Element.prototype.rt={};")
  eval("HTMLCollection.prototype.rt={};")
  eval("rtge=function(el){return document.getElementById(el)};")
}
function newrtf(func,name) {
  eval("NodeList.prototype.rt." + name + "=" + func)
  eval("Element.prototype.rt." + name + "=" + func)
  eval("HTMLCollection.prototype.rt." + name + "=" + func)
  eval("rt." + name + "=" + func)
}
function rtmm() {
  newrtf(RTDAT.getid, "getid");
  newrtf(RTDAT.setid, "setid");
}
function elem() {
  newrtf(RTDAT.newp, "newp");
  newrtf(RTDAT.newele, "newele");
}
