var  fileObj= app.project.file;
var fileName = fileObj.name;
var filePath = fileObj.fsName;
var fileAct = fileName.slice(0,-4);
var dt = new Date();
var y = dt.getFullYear();
var m = ("00" + (dt.getMonth()+1)).slice(-2);
var d = ("00" + dt.getDate()).slice(-2);
var dstr = y + m + d

flag = confirm(filePath.slice(0,-13)+"_"+dstr+".aep"+"\nとして別名で保存しますか？");
if (flag == true){
 var saveObj = new File(filePath.slice(0,-13)+"_"+dstr+".aep");
 app.project.save(saveObj);
 alert("保存しました");
 }else{
 	flag2= confirm(filePath.slice(0,-4)+"_"+dstr+".aep"+"\nとして別名で保存しますか？");
 	if(flag2 == true){
 		var saveObj = new File(filePath.slice(0,-4)+"_"+dstr+".aep");
 		app.project.save(saveObj);
 		alert("保存しました");
 		}else{
 			 	alert("キャンセルされました");
 			}

};

//var saveObj = newFile(filePath+"_"+dstr+".aep");
//app.project.save(saveObj)
