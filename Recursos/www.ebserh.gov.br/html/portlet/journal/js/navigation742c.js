AUI.add("liferay-journal-navigation",function(s){var w=s.Object;var g=s.Lang;var c=Liferay.HistoryManager;var d="displayStyleToolbar";var q="searchType";var x=1;var v="advancedSearch";var y="andOperator";var D="click";var h="content";var E="description";var i="folderId";var n="keywords";var b="paginationData";var z="rowIdsJournalFolderCheckbox";var B="rowIdsJournalArticleCheckbox";var r="searchArticleId";var f="searchFolderId";var u="searchResultsContainer";var G="selectedFolder";var p="showSearchInfo";var C="status";var e="title";var o="type";var m="struts_action";var a=1;var F=2;var t=3;var l=4;var k='<div class="alert alert-info">{0}</div><div class="loading-animation" />';var j=s.Component.create({AUGMENTS:[Liferay.PortletBase],EXTENDS:s.Base,NAME:"journalnavigation",prototype:{initializer:function(I){var R=this;var L=R.byId("journalContainer");R._journalContainer=L;R._eventDataRequest=R.ns("dataRequest");R._eventDataRetrieveSuccess=R.ns("dataRetrieveSuccess");R._eventOpenAdvancedSearch=R.ns("openAdvancedSearch");R._eventChangeSearchFolder=R.ns("changeSearchFolder");R._entriesContainer=R.byId("entriesContainer");R._eventPageLoaded=R.ns("pageLoaded");R._advancedSearchNode=R.byId(v);R._andOperatorNode=R.byId(y);R._contentNode=R.byId(h);R._descriptionNode=R.byId(E);R._keywordsNode=R.byId(n);R._searchArticleIdNode=R.byId(r);R._statusNode=R.byId(C);R._titleNode=R.byId(e);R._typeNode=R.byId(o);var V=[R.ns(B),R.ns(z)];var S=I.displayStyle;var U="entry-display-style";var K=R.byId(d);var M=R.NS;var N=R.ns("journalContainer");var T=I.paginator;T.entryPaginationContainer=".article-entries-pagination";T.folderPaginationContainer=".folder-pagination";T.namespace=M;var Q=new Liferay.AppViewPaginator(T);R._appViewPaginator=Q;var P=I.select;P.checkBoxesId=V;P.displayStyle=S;P.displayStyleCSSClass=U;P.displayStyleToolbar=K;P.folderContainer=R.byId("folderContainer");P.namespace=M;P.portletContainerId=N;P.selector="entry-selector";R._appViewSelect=new Liferay.AppViewSelect(P);var O=I.move;O.processEntryIds={checkBoxesIds:V,entryIds:[R.ns("articleIds"),R.ns("folderIds")]};O.displayStyleCSSClass=U;O.draggableCSSClass=".entry-link";O.namespace=M;O.portletContainerId=N;O.portletGroup="journal";R._appViewMove=new Liferay.AppViewMove(O);var J=I.folders;J.displayStyle=S;J.displayStyleCSSClass=U;J.displayStyleToolbar=K;J.entry={paramName:"structureId",typeId:"data-structure-id"};J.namespace=M;J.portletContainerId=N;R._appViewFolders=new Liferay.AppViewFolders(J);var H=[Liferay.on(R._eventDataRetrieveSuccess,R._onDataRetrieveSuccess,R),Liferay.on(R._eventPageLoaded,R._onPageLoaded,R),c.after("stateChange",R._afterStateChange,R),Liferay.on(R._eventChangeSearchFolder,R._onChangeSearchFolder,R)];R._config=I;R._eventHandles=H;H.push(Liferay.on(I.portletId+":portletRefreshed",s.bind("destructor",R)));var A=R.one("#fm1");if(A){A.on("submit",R._onSearchFormSubmit,R)}},destructor:function(){var A=this;s.Array.invoke(A._eventHandles,"detach");A._appViewFolders.destroy();A._appViewMove.destroy();A._appViewPaginator.destroy();A._appViewSelect.destroy();A._journalContainer.purge(true)},_afterStateChange:function(I){var A=this;var H=A.NS;var K={};var J=c.get();w.each(J,function(M,L,N){if(L.indexOf(H)===0){K[L]=M}});if(w.isEmpty(K)){K=A._getDefaultHistoryState()}Liferay.fire(A._eventDataRequest,{requestParams:K,src:F})},_getDefaultHistoryState:function(){var H=this;var A=c.get();if(w.isEmpty(A)){A=H._appViewPaginator.get("defaultParams")}return A},_onAdvancedSearchFormSubmit:function(J){var A=this;var I=A._appViewSelect._getSelectedFolder();var K=I.id;if(K===0){K=-1}var H={advancedSearch:true,andOperator:A._andOperatorNode.get("value"),folderId:I.id,content:A._contentNode.get("value"),description:A._descriptionNode.get("value"),keywords:"",searchArticleId:A._searchArticleIdNode.get("value"),searchFolderId:K,showSearchInfo:true,status:A._statusNode.get("value"),title:A._titleNode.get("value"),type:A._typeNode.get("value")};A._searchArticle(H)},_onChangeSearchFolder:function(J){var A=this;var I=A._appViewSelect.get(G);var H={advancedSearch:A._advancedSearchNode.get("value"),andOperator:A._andOperatorNode.get("value"),folderId:I.id,content:A._contentNode.get("value"),description:A._descriptionNode.get("value"),keywords:A._keywordsNode.get("value"),searchArticleId:A._searchArticleIdNode.get("value"),showSearchInfo:true,status:A._statusNode.get("value"),title:A._titleNode.get("value"),type:A._typeNode.get("value")};if(J.searchEverywhere){H[f]=-1}else{H[f]=I.id}A._searchArticle(H)},_onDataRetrieveSuccess:function(J){var A=this;var H=J.responseData;A._journalContainer.loadingmask.hide();var I=s.Node.create(H);if(I){A._setSearchResults(I);A._appViewFolders.processData(I);A._appViewSelect.syncDisplayStyleToolbar()}},_onPageLoaded:function(I){var A=this;var H=I.pagination;if(H){A._appViewPaginator.set(b,H)}},_onSearchFormSubmit:function(H){var A=this;H.preventDefault();if(A._advancedSearchNode.get("value")==="true"){A._onAdvancedSearchFormSubmit(H)}else{A._onSimpleSearchFormSubmit(H)}},_onSimpleSearchFormSubmit:function(J){var A=this;var I=A._appViewSelect.get(G);var K=I.id;if(K===0){K=-1}var H={advancedSearch:false,andOperator:"",folderId:I.id,content:"",description:"",keywords:A._keywordsNode.get("value"),searchArticleId:"",searchFolderId:K,showSearchInfo:true,status:"",title:"",type:""};A._searchArticle(H)},_searchArticle:function(H){var A=this;if(H.showSearchInfo){var K=A._entriesContainer;K.empty();var J=g.sub(k,['\u0050\u0065\u0073\u0071\u0075\u0069\u0073\u0061\u006e\u0064\u006f\u002c\u0020\u0061\u0067\u0075\u0061\u0072\u0064\u0065\u0020\u0070\u006f\u0072\u0020\u0066\u0061\u0076\u006f\u0072\u002e']);K.html(J)}var I={};I[A.ns(m)]="/journal/search";I[A.ns(v)]=H.advancedSearch;I[A.ns(y)]=H.andOperator;I[A.ns(h)]=H.content;I[A.ns(E)]=H.description;I[A.ns(i)]=H.folderId;I[A.ns(f)]=H.searchFolderId;I[A.ns(r)]=H.searchArticleId;I[A.ns(C)]=H.status;I[A.ns(e)]=H.title;I[A.ns(o)]=H.type;I[A.ns(q)]=x;I[A.ns(n)]=H.keywords;I[A.ns(p)]=H.showSearchInfo;Liferay.fire(A._eventDataRequest,{requestParams:I,src:Liferay.JOURNAL_SEARCH})},_setSearchResults:function(L){var A=this;var K=A.one("#"+A.ns("searchInfo"),L);var M=A._entriesContainer;if(K){M.empty();M.setContent(K)}var I=A.one("#fragmentSearchResults",L);var J;if(I){J=A.one("#"+u,M);if(J){J.empty();J.setContent(I.html())}}var H=A.one("#"+u,L);if(H){if(!K){M.empty()}M.append(H)}if(H||I){A.all("#addButtonContainer").hide()}}}});Liferay.JOURNAL_SEARCH=t;Liferay.JOURNAL_SEARCH_END=l;Liferay.JOURNAL_ENTRIES_PAGINATOR=a;Liferay.Portlet.JournalNavigation=j},"",{requires:["aui-loading-mask-deprecated","aui-pagination","aui-parse-content","event-simulate","liferay-app-view-folders","liferay-app-view-move","liferay-app-view-paginator","liferay-app-view-select","liferay-history-manager","liferay-list-view","liferay-message","liferay-portlet-base","liferay-util-list-fields","querystring-parse-simple"]});