fullScreenOptimized : {type : "boolean", group : "Appearance", defaultValue : false},

			/**
			 * The title link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the "titlePress" event should be registered.
			 * @since 1.28
			 */
			titleHref : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},

			/**
			 * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
			 * @since 1.28
			 */
			titleTarget : {type : "string", group : "Behavior", defaultValue : null},

			/**
			 * The intro link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the "introPress" event should be registered.
			 * @since 1.28
			 */
			introHref : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},

			/**
			 * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
			 * @since 1.28
			 */
			introTarget : {type : "string", group : "Behavior", defaultValue : null},

			/**
			 * This property specifies the title text directionality with enumerated options. By default, the control inherits text direction from the DOM.
			 * @since 1.28.0
			 */
			titleTextDirection : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},

			/**
			 * This property specifies the intro text directionality with enumerated options. By default, the control inherits text direction from the DOM.
			 * @since 1.28.0
			 */
			introTextDirection : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},

			/**