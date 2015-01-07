webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(13);

	var Fangorn = __webpack_require__(5);


	// Define Fangorn Button Actions
	function _fangornActionColumn (item, col) {
	    var self = this;
	    var buttons = [];

	    if (item.kind === 'folder') {
	        buttons.push(
	            {
	                'name' : '',
	                'icon' : 'icon-upload-alt',
	                'css' : 'fangorn-clickable btn btn-default btn-xs',
	                'onclick' : Fangorn.ButtonEvents._uploadEvent
	            }
	        );
	    }

	    if (item.kind === 'file' && item.data.extra && item.data.extra.status === 'public') {
	        buttons.push({
	            'name' : '',
	            'icon' : 'icon-download-alt',
	            'css' : 'btn btn-info btn-xs',
	            'onclick' : Fangorn.ButtonEvents._downloadEvent
	        });
	    }

	    if (item.kind === 'file' && item.data.extra && item.data.extra.status !== 'public') {
	        buttons.push({
	            'name' : '',
	            'icon' : 'icon-remove',
	            'css' : 'm-l-lg text-danger fg-hover-hide',
	            'style' : 'display:none',
	            'onclick' : Fangorn.ButtonEvents._removeEvent
	        });
	    }

	    return buttons.map(function(btn) {
	        return m('span', { 'data-col' : item.id }, [ m('i',
	            { 'class' : btn.css, style : btn.style, 'onclick' : function(event){ btn.onclick.call(self, event, item, col); } },
	            [ m('span', { 'class' : btn.icon}, btn.name) ])
	        ]);
	    });
	}

	Fangorn.config.figshare = {
	    // Fangorn options are called if functions, so return a thunk that returns the column builder
	    resolveActionColumn: function() {return _fangornActionColumn;}
	};


/***/ }

});