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
exports.push([module.i, "#cardContainer{max-width:400px;width:275px;height:400px;z-index:2;display:flex;margin:0 auto}#cardTemplate{top:0;z-index:2}#cardFace,#cardTemplate{position:relative;bottom:0}#cardFace{top:65px;left:-250px;height:220px;z-index:1}#cardTitle{font-family:Didact Gothic,sans-serif;font-size:25px;margin-left:20px;margin-top:15px;width:210px;height:30px}#cardTitle,#starLevel{position:absolute;z-index:2}#starLevel{margin-left:230px;margin-top:50px;height:15px;width:15px}#cardType{position:absolute;z-index:2;margin-left:235px;margin-top:22px;height:20px;width:20px}#cardSubType{margin-top:303px}#cardDesc,#cardSubType{position:absolute;z-index:2;margin-left:23px}#cardDesc{margin-top:323px;width:235px}#cardAtk{margin-left:175px}#cardAtk,#cardDef{position:absolute;z-index:2;margin-top:363px;font-size:14px;font-weight:700}#cardDef{margin-left:230px}.cards{bottom:0;left:0;right:0;display:flex;height:250px;justify-content:center;position:fixed}.generated-card{transform:scale(.7);transform-origin:top left;width:100px}", "",{"version":3,"sources":["C:/Users/Nfernal/Desktop/nextjs-sequelize/public/global.scss"],"names":[],"mappings":"AAAA,eACE,eAAA,CACA,WAAA,CACA,YAAA,CACA,SAAA,CACA,YAAA,CACA,aACF,CAEA,cAEE,KAAA,CAEA,SACF,CAEA,wBANE,iBAAA,CAEA,QAWF,CAPA,UAEE,QAAA,CAEA,WAAA,CACA,YAAA,CACA,SACF,CAEA,WAEE,oCAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,WAAA,CACA,WAEF,CAGA,sBAXE,iBAAA,CAOA,SAWF,CAPA,WAGE,iBAAA,CACA,eAAA,CACA,WAAA,CACA,UACF,CAEA,UACE,iBAAA,CACA,SAAA,CACA,iBAAA,CACA,eAAA,CACA,WAAA,CACA,UACF,CAEA,aAIE,gBACF,CAEA,uBANE,iBAAA,CACA,SAAA,CACA,gBAUF,CANA,UAIE,gBAAA,CACA,WACF,CAEA,SAGE,iBAIF,CAEA,kBARE,iBAAA,CACA,SAAA,CAEA,gBAAA,CACA,cAAA,CACA,eAUF,CAPA,SAGE,iBAIF,CAEA,OACE,QAAA,CACA,MAAA,CACA,OAAA,CACA,YAAA,CACA,YAAA,CACA,sBAAA,CACA,cACF,CAEA,gBACE,mBAAA,CACA,yBAAA,CACA,WACF","file":"global.scss","sourcesContent":["#cardContainer {\r\n  max-width: 400px;\r\n  width: 275px;\r\n  height: 400px;\r\n  z-index: 2;\r\n  display: flex;\r\n  margin: 0 auto;\r\n}\r\n\r\n#cardTemplate {\r\n  position: relative;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 2;\r\n}\r\n\r\n#cardFace {\r\n  position: relative;\r\n  top: 65px;\r\n  bottom: 0;\r\n  left: -250px;\r\n  height: 220px;\r\n  z-index: 1;\r\n}\r\n\r\n#cardTitle {\r\n  position: absolute;\r\n  font-family: \"Didact Gothic\", sans-serif;\r\n  font-size: 25px;\r\n  margin-left: 20px;\r\n  margin-top: 15px;\r\n  width: 210px;\r\n  height: 30px;\r\n  z-index: 2;\r\n}\r\n\r\n/* star levels */\r\n#starLevel {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 230px;\r\n  margin-top: 50px;\r\n  height: 15px;\r\n  width: 15px;\r\n}\r\n\r\n#cardType {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 235px;\r\n  margin-top: 22px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n#cardSubType {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 23px;\r\n  margin-top: 303px;\r\n}\r\n\r\n#cardDesc {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 23px;\r\n  margin-top: 323px;\r\n  width: 235px;\r\n}\r\n\r\n#cardAtk {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 175px;\r\n  margin-top: 363px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n#cardDef {\r\n  position: absolute;\r\n  z-index: 2;\r\n  margin-left: 230px;\r\n  margin-top: 363px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n.cards {\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: flex;\r\n  height: 250px;\r\n  justify-content: center;\r\n  position: fixed;\r\n}\r\n\r\n.generated-card {\r\n  transform: scale(0.7);\r\n  transform-origin: top left;\r\n  width: 100px\r\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsZ0JBQWdCLFlBQVksYUFBYSxVQUFVLGFBQWEsY0FBYyxjQUFjLE1BQU0sVUFBVSx3QkFBd0Isa0JBQWtCLFNBQVMsVUFBVSxTQUFTLFlBQVksYUFBYSxVQUFVLFdBQVcscUNBQXFDLGVBQWUsaUJBQWlCLGdCQUFnQixZQUFZLFlBQVksc0JBQXNCLGtCQUFrQixVQUFVLFdBQVcsa0JBQWtCLGdCQUFnQixZQUFZLFdBQVcsVUFBVSxrQkFBa0IsVUFBVSxrQkFBa0IsZ0JBQWdCLFlBQVksV0FBVyxhQUFhLGlCQUFpQix1QkFBdUIsa0JBQWtCLFVBQVUsaUJBQWlCLFVBQVUsaUJBQWlCLFlBQVksU0FBUyxrQkFBa0Isa0JBQWtCLGtCQUFrQixVQUFVLGlCQUFpQixlQUFlLGdCQUFnQixTQUFTLGtCQUFrQixPQUFPLFNBQVMsT0FBTyxRQUFRLGFBQWEsYUFBYSx1QkFBdUIsZUFBZSxnQkFBZ0Isb0JBQW9CLDBCQUEwQixZQUFZLE9BQU8sb3pCQUFvekIsdUJBQXVCLG1CQUFtQixvQkFBb0IsaUJBQWlCLG9CQUFvQixxQkFBcUIsS0FBSyx1QkFBdUIseUJBQXlCLGFBQWEsZ0JBQWdCLGlCQUFpQixLQUFLLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsb0JBQW9CLGlCQUFpQixLQUFLLG9CQUFvQix5QkFBeUIsaURBQWlELHNCQUFzQix3QkFBd0IsdUJBQXVCLG1CQUFtQixtQkFBbUIsaUJBQWlCLEtBQUsseUNBQXlDLHlCQUF5QixpQkFBaUIseUJBQXlCLHVCQUF1QixtQkFBbUIsa0JBQWtCLEtBQUssbUJBQW1CLHlCQUF5QixpQkFBaUIseUJBQXlCLHVCQUF1QixtQkFBbUIsa0JBQWtCLEtBQUssc0JBQXNCLHlCQUF5QixpQkFBaUIsd0JBQXdCLHdCQUF3QixLQUFLLG1CQUFtQix5QkFBeUIsaUJBQWlCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLEtBQUssa0JBQWtCLHlCQUF5QixpQkFBaUIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUssa0JBQWtCLHlCQUF5QixpQkFBaUIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUssZ0JBQWdCLGdCQUFnQixjQUFjLGVBQWUsb0JBQW9CLG9CQUFvQiw4QkFBOEIsc0JBQXNCLEtBQUsseUJBQXlCLDRCQUE0QixpQ0FBaUMsdUJBQXVCLEdBQUc7QUFDaGlIO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDQ2N2E5YmI2MzFlYmE5YjRhODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNjYXJkQ29udGFpbmVye21heC13aWR0aDo0MDBweDt3aWR0aDoyNzVweDtoZWlnaHQ6NDAwcHg7ei1pbmRleDoyO2Rpc3BsYXk6ZmxleDttYXJnaW46MCBhdXRvfSNjYXJkVGVtcGxhdGV7dG9wOjA7ei1pbmRleDoyfSNjYXJkRmFjZSwjY2FyZFRlbXBsYXRle3Bvc2l0aW9uOnJlbGF0aXZlO2JvdHRvbTowfSNjYXJkRmFjZXt0b3A6NjVweDtsZWZ0Oi0yNTBweDtoZWlnaHQ6MjIwcHg7ei1pbmRleDoxfSNjYXJkVGl0bGV7Zm9udC1mYW1pbHk6RGlkYWN0IEdvdGhpYyxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyNXB4O21hcmdpbi1sZWZ0OjIwcHg7bWFyZ2luLXRvcDoxNXB4O3dpZHRoOjIxMHB4O2hlaWdodDozMHB4fSNjYXJkVGl0bGUsI3N0YXJMZXZlbHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjJ9I3N0YXJMZXZlbHttYXJnaW4tbGVmdDoyMzBweDttYXJnaW4tdG9wOjUwcHg7aGVpZ2h0OjE1cHg7d2lkdGg6MTVweH0jY2FyZFR5cGV7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO21hcmdpbi1sZWZ0OjIzNXB4O21hcmdpbi10b3A6MjJweDtoZWlnaHQ6MjBweDt3aWR0aDoyMHB4fSNjYXJkU3ViVHlwZXttYXJnaW4tdG9wOjMwM3B4fSNjYXJkRGVzYywjY2FyZFN1YlR5cGV7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO21hcmdpbi1sZWZ0OjIzcHh9I2NhcmREZXNje21hcmdpbi10b3A6MzIzcHg7d2lkdGg6MjM1cHh9I2NhcmRBdGt7bWFyZ2luLWxlZnQ6MTc1cHh9I2NhcmRBdGssI2NhcmREZWZ7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO21hcmdpbi10b3A6MzYzcHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NzAwfSNjYXJkRGVme21hcmdpbi1sZWZ0OjIzMHB4fS5jYXJkc3tib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjI1MHB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7cG9zaXRpb246Zml4ZWR9LmdlbmVyYXRlZC1jYXJke3RyYW5zZm9ybTpzY2FsZSguNyk7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdDt3aWR0aDoxMDBweH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9OZmVybmFsL0Rlc2t0b3AvbmV4dGpzLXNlcXVlbGl6ZS9wdWJsaWMvZ2xvYmFsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFDRSxlQUFBLENBQ0EsV0FBQSxDQUNBLFlBQUEsQ0FDQSxTQUFBLENBQ0EsWUFBQSxDQUNBLGFBQ0YsQ0FFQSxjQUVFLEtBQUEsQ0FFQSxTQUNGLENBRUEsd0JBTkUsaUJBQUEsQ0FFQSxRQVdGLENBUEEsVUFFRSxRQUFBLENBRUEsV0FBQSxDQUNBLFlBQUEsQ0FDQSxTQUNGLENBRUEsV0FFRSxvQ0FBQSxDQUNBLGNBQUEsQ0FDQSxnQkFBQSxDQUNBLGVBQUEsQ0FDQSxXQUFBLENBQ0EsV0FFRixDQUdBLHNCQVhFLGlCQUFBLENBT0EsU0FXRixDQVBBLFdBR0UsaUJBQUEsQ0FDQSxlQUFBLENBQ0EsV0FBQSxDQUNBLFVBQ0YsQ0FFQSxVQUNFLGlCQUFBLENBQ0EsU0FBQSxDQUNBLGlCQUFBLENBQ0EsZUFBQSxDQUNBLFdBQUEsQ0FDQSxVQUNGLENBRUEsYUFJRSxnQkFDRixDQUVBLHVCQU5FLGlCQUFBLENBQ0EsU0FBQSxDQUNBLGdCQVVGLENBTkEsVUFJRSxnQkFBQSxDQUNBLFdBQ0YsQ0FFQSxTQUdFLGlCQUlGLENBRUEsa0JBUkUsaUJBQUEsQ0FDQSxTQUFBLENBRUEsZ0JBQUEsQ0FDQSxjQUFBLENBQ0EsZUFVRixDQVBBLFNBR0UsaUJBSUYsQ0FFQSxPQUNFLFFBQUEsQ0FDQSxNQUFBLENBQ0EsT0FBQSxDQUNBLFlBQUEsQ0FDQSxZQUFBLENBQ0Esc0JBQUEsQ0FDQSxjQUNGLENBRUEsZ0JBQ0UsbUJBQUEsQ0FDQSx5QkFBQSxDQUNBLFdBQ0ZcIixcImZpbGVcIjpcImdsb2JhbC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjYXJkQ29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICB3aWR0aDogMjc1cHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmRUZW1wbGF0ZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZEZhY2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiA2NXB4O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogLTI1MHB4O1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNjYXJkVGl0bGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJEaWRhY3QgR290aGljXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHdpZHRoOiAyMTBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi8qIHN0YXIgbGV2ZWxzICovXFxyXFxuI3N0YXJMZXZlbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZFR5cGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIycHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmRTdWJUeXBlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjNweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZERlc2Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xcclxcbiAgbWFyZ2luLXRvcDogMzIzcHg7XFxyXFxuICB3aWR0aDogMjM1cHg7XFxyXFxufVxcclxcblxcclxcbiNjYXJkQXRrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBtYXJnaW4tbGVmdDogMTc1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzNjNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZERlZiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzYzcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5nZW5lcmF0ZWQtY2FyZCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gIHdpZHRoOiAxMDBweFxcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9