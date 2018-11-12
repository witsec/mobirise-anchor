mbrApp.loadComponents(
	"witsec-anchor",
	{"witsec-anchor-block":{
			_group:"witsec",
			_onParamsShow: function(e,$params,$block) {
				this._params.AnchorName = this.AnchorName.replace(/#/, "")
			},
			_params:{
				Notice: {type:"separator",title: "The anchor you see on the left, will not be visible on preview/publish."},
				AnchorName:{type:"text",title:"Anchor name:",default:""},
			},
			AnchorName:"Please use the gear-icon to change the name of this anchor.",
			_onParamsChange: function($item, param, val) {
				if (param == "AnchorName") {
					this.AnchorName="#" + val;
					this.Anchor="<div id='" + val + "'></div>";
				}
			},
			_publishFilter: function($obj) {
				$obj.find(".witsec-anchor-anchorname").remove();
			}	
		}
	}
);
