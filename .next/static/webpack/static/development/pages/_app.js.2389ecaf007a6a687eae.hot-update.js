webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/global.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./public/global.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "#cardContainer{max-width:400px;width:275px;height:400px;z-index:2;display:flex;margin:0 auto}#cardTemplate{top:0;z-index:2}#cardFace,#cardTemplate{position:relative;bottom:0}#cardFace{top:65px;left:-250px;height:220px;z-index:1}#cardTitle{font-family:Didact Gothic,sans-serif;font-size:25px;margin-left:20px;margin-top:15px;width:210px;height:30px}#cardTitle,#starLevel{position:absolute;z-index:2}#starLevel{margin-left:230px;margin-top:50px;height:15px;width:15px}#cardType{position:absolute;z-index:2;margin-left:235px;margin-top:22px;height:20px;width:20px}#cardSubType{margin-top:303px}#cardDesc,#cardSubType{position:absolute;z-index:2;margin-left:23px}#cardDesc{margin-top:323px;width:235px}#cardAtk{margin-left:175px}#cardAtk,#cardDef{position:absolute;z-index:2;margin-top:363px;font-size:14px;font-weight:700}#cardDef{margin-left:230px}.cards{display:flex;justify-content:center}.generated-field-card{margin:5px}.generated-field-card,.generated-hand-card{transform:scale(.63);transform-origin:top left;width:175px}.generated-hand-card{margin-left:-70px;padding-left:50px}", "",{"version":3,"sources":["C:/Users/Nfernal/Desktop/nextjs-sequelize/public/global.scss"],"names":[],"mappings":"AAEA,eACE,eAAA,CACA,WAAA,CACA,YAAA,CACA,SAAA,CACA,YAAA,CACA,aADF,CAIA,cAEE,KAAA,CAEA,SADF,CAIA,wBANE,iBAAA,CAEA,QASF,CALA,UAEE,QAAA,CAEA,WAAA,CACA,YAAA,CACA,SADF,CAIA,WAEE,oCAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,WAAA,CACA,WAAF,CAKA,sBAXE,iBAAA,CAOA,SASF,CALA,WAGE,iBAAA,CACA,eAAA,CACA,WAAA,CACA,UADF,CAIA,UACE,iBAAA,CACA,SAAA,CACA,iBAAA,CACA,eAAA,CACA,WAAA,CACA,UADF,CAIA,aAIE,gBADF,CAIA,uBANE,iBAAA,CACA,SAAA,CACA,gBAQF,CAJA,UAIE,gBAAA,CACA,WADF,CAIA,SAGE,iBAEF,CAIA,kBARE,iBAAA,CACA,SAAA,CAEA,gBAAA,CACA,cAAA,CACA,eAQF,CALA,SAGE,iBAEF,CAIA,OACE,YAAA,CACA,sBADF,CAIA,sBAGE,UAAF,CAIA,2CANE,oBAAA,CACA,yBAAA,CAEA,WAQF,CALA,qBAIE,iBAAA,CACA,iBAAF","file":"global.scss","sourcesContent":["$card-scale: 0.63;\r\n\r\n#cardContainer {\r\n  max-width: 400px;\r\n  width: 275px;\r\n  height: 400px;\r\n  z-index: 2;\r\n  display: flex;\r\n  margin: 0 auto;\r\n}\r\n\r\n#cardTemplate {\r\n  position: relative;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 2;\r\n}\r\n\r\n#cardFace {\r\n  position: relative;\r\n  top: 65px;\r\n  bottom: 0;\r\n  left: -250px;\r\n  height: 220px;\r\n  z-index: 1;\r\n}\r\n\r\n#cardTitle {\r\n  position: absolute;\r\n  font-family: \"Didact Gothic\", sans-serif;\r\n  font-size: 25px;\r\n  margin-left: 20px;\r\n  margin-top: 15px;\r\n  width: 210px;\r\n  height: 30px;\r\n  z-index: 2;\r\n}\r\n\r\n/* star levels */\r\n#starLevel {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 230px;\r\n  margin-top: 50px;\r\n  height: 15px;\r\n  width: 15px;\r\n}\r\n\r\n#cardType {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 235px;\r\n  margin-top: 22px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n#cardSubType {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 23px;\r\n  margin-top: 303px;\r\n}\r\n\r\n#cardDesc {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 23px;\r\n  margin-top: 323px;\r\n  width: 235px;\r\n}\r\n\r\n#cardAtk {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 175px;\r\n  margin-top: 363px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n#cardDef {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 230px;\r\n  margin-top: 363px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.generated-field-card {\r\n  transform: scale($card-scale);\r\n  transform-origin: top left;\r\n  margin: 5px;\r\n  width: 175px;\r\n}\r\n\r\n.generated-hand-card {\r\n  transform: scale($card-scale);\r\n  transform-origin: top left;\r\n  padding-left: 57px;\r\n  margin-left: -70px;\r\n  padding-left: 50px;\r\n  width: 175px;\r\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsZ0JBQWdCLFlBQVksYUFBYSxVQUFVLGFBQWEsY0FBYyxjQUFjLE1BQU0sVUFBVSx3QkFBd0Isa0JBQWtCLFNBQVMsVUFBVSxTQUFTLFlBQVksYUFBYSxVQUFVLFdBQVcscUNBQXFDLGVBQWUsaUJBQWlCLGdCQUFnQixZQUFZLFlBQVksc0JBQXNCLGtCQUFrQixVQUFVLFdBQVcsa0JBQWtCLGdCQUFnQixZQUFZLFdBQVcsVUFBVSxrQkFBa0IsVUFBVSxrQkFBa0IsZ0JBQWdCLFlBQVksV0FBVyxhQUFhLGlCQUFpQix1QkFBdUIsa0JBQWtCLFVBQVUsaUJBQWlCLFVBQVUsaUJBQWlCLFlBQVksU0FBUyxrQkFBa0Isa0JBQWtCLGtCQUFrQixVQUFVLGlCQUFpQixlQUFlLGdCQUFnQixTQUFTLGtCQUFrQixPQUFPLGFBQWEsdUJBQXVCLHNCQUFzQixXQUFXLDJDQUEyQyxxQkFBcUIsMEJBQTBCLFlBQVkscUJBQXFCLGtCQUFrQixrQkFBa0IsT0FBTyxnekJBQWd6Qix3QkFBd0IsdUJBQXVCLG1CQUFtQixvQkFBb0IsaUJBQWlCLG9CQUFvQixxQkFBcUIsS0FBSyx1QkFBdUIseUJBQXlCLGFBQWEsZ0JBQWdCLGlCQUFpQixLQUFLLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsb0JBQW9CLGlCQUFpQixLQUFLLG9CQUFvQix5QkFBeUIsaURBQWlELHNCQUFzQix3QkFBd0IsdUJBQXVCLG1CQUFtQixtQkFBbUIsaUJBQWlCLEtBQUsseUNBQXlDLHlCQUF5QixpQkFBaUIseUJBQXlCLHVCQUF1QixtQkFBbUIsa0JBQWtCLEtBQUssbUJBQW1CLHlCQUF5QixpQkFBaUIseUJBQXlCLHVCQUF1QixtQkFBbUIsa0JBQWtCLEtBQUssc0JBQXNCLHlCQUF5QixpQkFBaUIsd0JBQXdCLHdCQUF3QixLQUFLLG1CQUFtQix5QkFBeUIsaUJBQWlCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLEtBQUssa0JBQWtCLHlCQUF5QixpQkFBaUIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUssa0JBQWtCLHlCQUF5QixpQkFBaUIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUssZ0JBQWdCLG9CQUFvQiw4QkFBOEIsS0FBSywrQkFBK0Isb0NBQW9DLGlDQUFpQyxrQkFBa0IsbUJBQW1CLEtBQUssOEJBQThCLG9DQUFvQyxpQ0FBaUMseUJBQXlCLHlCQUF5Qix5QkFBeUIsbUJBQW1CLEtBQUssR0FBRztBQUN0d0g7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4yMzg5ZWNhZjAwN2E2YTY4N2VhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2NhcmRDb250YWluZXJ7bWF4LXdpZHRoOjQwMHB4O3dpZHRoOjI3NXB4O2hlaWdodDo0MDBweDt6LWluZGV4OjI7ZGlzcGxheTpmbGV4O21hcmdpbjowIGF1dG99I2NhcmRUZW1wbGF0ZXt0b3A6MDt6LWluZGV4OjJ9I2NhcmRGYWNlLCNjYXJkVGVtcGxhdGV7cG9zaXRpb246cmVsYXRpdmU7Ym90dG9tOjB9I2NhcmRGYWNle3RvcDo2NXB4O2xlZnQ6LTI1MHB4O2hlaWdodDoyMjBweDt6LWluZGV4OjF9I2NhcmRUaXRsZXtmb250LWZhbWlseTpEaWRhY3QgR290aGljLHNhbnMtc2VyaWY7Zm9udC1zaXplOjI1cHg7bWFyZ2luLWxlZnQ6MjBweDttYXJnaW4tdG9wOjE1cHg7d2lkdGg6MjEwcHg7aGVpZ2h0OjMwcHh9I2NhcmRUaXRsZSwjc3RhckxldmVse3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mn0jc3RhckxldmVse21hcmdpbi1sZWZ0OjIzMHB4O21hcmdpbi10b3A6NTBweDtoZWlnaHQ6MTVweDt3aWR0aDoxNXB4fSNjYXJkVHlwZXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7bWFyZ2luLWxlZnQ6MjM1cHg7bWFyZ2luLXRvcDoyMnB4O2hlaWdodDoyMHB4O3dpZHRoOjIwcHh9I2NhcmRTdWJUeXBle21hcmdpbi10b3A6MzAzcHh9I2NhcmREZXNjLCNjYXJkU3ViVHlwZXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7bWFyZ2luLWxlZnQ6MjNweH0jY2FyZERlc2N7bWFyZ2luLXRvcDozMjNweDt3aWR0aDoyMzVweH0jY2FyZEF0a3ttYXJnaW4tbGVmdDoxNzVweH0jY2FyZEF0aywjY2FyZERlZntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7bWFyZ2luLXRvcDozNjNweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo3MDB9I2NhcmREZWZ7bWFyZ2luLWxlZnQ6MjMwcHh9LmNhcmRze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5nZW5lcmF0ZWQtZmllbGQtY2FyZHttYXJnaW46NXB4fS5nZW5lcmF0ZWQtZmllbGQtY2FyZCwuZ2VuZXJhdGVkLWhhbmQtY2FyZHt0cmFuc2Zvcm06c2NhbGUoLjYzKTt0cmFuc2Zvcm0tb3JpZ2luOnRvcCBsZWZ0O3dpZHRoOjE3NXB4fS5nZW5lcmF0ZWQtaGFuZC1jYXJke21hcmdpbi1sZWZ0Oi03MHB4O3BhZGRpbmctbGVmdDo1MHB4fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL05mZXJuYWwvRGVza3RvcC9uZXh0anMtc2VxdWVsaXplL3B1YmxpYy9nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxlQUNFLGVBQUEsQ0FDQSxXQUFBLENBQ0EsWUFBQSxDQUNBLFNBQUEsQ0FDQSxZQUFBLENBQ0EsYUFERixDQUlBLGNBRUUsS0FBQSxDQUVBLFNBREYsQ0FJQSx3QkFORSxpQkFBQSxDQUVBLFFBU0YsQ0FMQSxVQUVFLFFBQUEsQ0FFQSxXQUFBLENBQ0EsWUFBQSxDQUNBLFNBREYsQ0FJQSxXQUVFLG9DQUFBLENBQ0EsY0FBQSxDQUNBLGdCQUFBLENBQ0EsZUFBQSxDQUNBLFdBQUEsQ0FDQSxXQUFGLENBS0Esc0JBWEUsaUJBQUEsQ0FPQSxTQVNGLENBTEEsV0FHRSxpQkFBQSxDQUNBLGVBQUEsQ0FDQSxXQUFBLENBQ0EsVUFERixDQUlBLFVBQ0UsaUJBQUEsQ0FDQSxTQUFBLENBQ0EsaUJBQUEsQ0FDQSxlQUFBLENBQ0EsV0FBQSxDQUNBLFVBREYsQ0FJQSxhQUlFLGdCQURGLENBSUEsdUJBTkUsaUJBQUEsQ0FDQSxTQUFBLENBQ0EsZ0JBUUYsQ0FKQSxVQUlFLGdCQUFBLENBQ0EsV0FERixDQUlBLFNBR0UsaUJBRUYsQ0FJQSxrQkFSRSxpQkFBQSxDQUNBLFNBQUEsQ0FFQSxnQkFBQSxDQUNBLGNBQUEsQ0FDQSxlQVFGLENBTEEsU0FHRSxpQkFFRixDQUlBLE9BQ0UsWUFBQSxDQUNBLHNCQURGLENBSUEsc0JBR0UsVUFBRixDQUlBLDJDQU5FLG9CQUFBLENBQ0EseUJBQUEsQ0FFQSxXQVFGLENBTEEscUJBSUUsaUJBQUEsQ0FDQSxpQkFBRlwiLFwiZmlsZVwiOlwiZ2xvYmFsLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNhcmQtc2NhbGU6IDAuNjM7XFxyXFxuXFxyXFxuI2NhcmRDb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIHdpZHRoOiAyNzVweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZFRlbXBsYXRlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbiNjYXJkRmFjZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDY1cHg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAtMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmRUaXRsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkRpZGFjdCBHb3RoaWNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3RhciBsZXZlbHMgKi9cXHJcXG4jc3RhckxldmVsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjMwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNjYXJkVHlwZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjJweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZFN1YlR5cGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xcclxcbiAgbWFyZ2luLXRvcDogMzAzcHg7XFxyXFxufVxcclxcblxcclxcbiNjYXJkRGVzYyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMjNweDtcXHJcXG4gIHdpZHRoOiAyMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmRBdGsge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNzVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDM2M3B4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNjYXJkRGVmIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjMwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzNjNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZXJhdGVkLWZpZWxkLWNhcmQge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgkY2FyZC1zY2FsZSk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgd2lkdGg6IDE3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZXJhdGVkLWhhbmQtY2FyZCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKCRjYXJkLXNjYWxlKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1N3B4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC03MHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDE3NXB4O1xcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9