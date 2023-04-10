
var RootQuery_possibleTypes = ['RootQuery']
export var isRootQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQuery"')
  return RootQuery_possibleTypes.includes(obj.__typename)
}



var Settings_possibleTypes = ['Settings']
export var isSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSettings"')
  return Settings_possibleTypes.includes(obj.__typename)
}



var RootQueryToCategoryConnection_possibleTypes = ['RootQueryToCategoryConnection']
export var isRootQueryToCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCategoryConnection"')
  return RootQueryToCategoryConnection_possibleTypes.includes(obj.__typename)
}



var CategoryConnection_possibleTypes = ['RootQueryToCategoryConnection','CategoryToAncestorsCategoryConnection','CategoryToCategoryConnection','PostToCategoryConnection']
export var isCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryConnection"')
  return CategoryConnection_possibleTypes.includes(obj.__typename)
}



var Connection_possibleTypes = ['RootQueryToCategoryConnection','TermNodeToEnqueuedScriptConnection','TermNodeToEnqueuedStylesheetConnection','CategoryToAncestorsCategoryConnection','CategoryToCategoryConnection','CategoryToContentNodeConnection','ContentTypeToTaxonomyConnection','TaxonomyToContentTypeConnection','ContentTypeToContentNodeConnection','UserToCommentConnection','CommentToCommentConnection','UserToEnqueuedScriptConnection','UserToEnqueuedStylesheetConnection','UserToMediaItemConnection','HierarchicalContentNodeToContentNodeAncestorsConnection','HierarchicalContentNodeToContentNodeChildrenConnection','ContentNodeToEnqueuedScriptConnection','ContentNodeToEnqueuedStylesheetConnection','MediaItemToCommentConnection','UserToPageConnection','PageToCommentConnection','PageToRevisionConnection','UserToPostConnection','PostToCategoryConnection','PostToCommentConnection','PostToPostFormatConnection','PostFormatToContentNodeConnection','PostFormatToPostConnection','PostToRevisionConnection','PostToTagConnection','TagToContentNodeConnection','TagToPostConnection','PostToTermNodeConnection','UserToRevisionsConnection','UserToUserRoleConnection','CategoryToPostConnection','RootQueryToCommentConnection','RootQueryToContentNodeConnection','RootQueryToContentTypeConnection','RootQueryToMediaItemConnection','MenuToMenuItemConnection','MenuItemToMenuItemConnection','RootQueryToMenuItemConnection','RootQueryToMenuConnection','RootQueryToPageConnection','RootQueryToPluginConnection','RootQueryToPostFormatConnection','RootQueryToPostConnection','RootQueryToEnqueuedScriptConnection','RootQueryToEnqueuedStylesheetConnection','RootQueryToRevisionsConnection','RootQueryToTagConnection','RootQueryToTaxonomyConnection','RootQueryToTermNodeConnection','RootQueryToThemeConnection','RootQueryToUserRoleConnection','RootQueryToUserConnection']
export var isConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConnection"')
  return Connection_possibleTypes.includes(obj.__typename)
}



var Edge_possibleTypes = ['TermNodeToEnqueuedScriptConnectionEdge','TermNodeToEnqueuedStylesheetConnectionEdge','CategoryToAncestorsCategoryConnectionEdge','CategoryToCategoryConnectionEdge','ContentNodeToContentTypeConnectionEdge','TaxonomyToContentTypeConnectionEdge','ContentTypeToTaxonomyConnectionEdge','ContentTypeToContentNodeConnectionEdge','ContentNodeToEditLockConnectionEdge','CommentToCommenterConnectionEdge','CommentToContentNodeConnectionEdge','CommentToParentCommentConnectionEdge','CommentToCommentConnectionEdge','UserToCommentConnectionEdge','UserToEnqueuedScriptConnectionEdge','UserToEnqueuedStylesheetConnectionEdge','NodeWithAuthorToUserConnectionEdge','HierarchicalContentNodeToContentNodeAncestorsConnectionEdge','HierarchicalContentNodeToContentNodeChildrenConnectionEdge','ContentNodeToEnqueuedScriptConnectionEdge','ContentNodeToEnqueuedStylesheetConnectionEdge','ContentNodeToEditLastConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','MediaItemToCommentConnectionEdge','UserToMediaItemConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','PageToCommentConnectionEdge','PageToPreviewConnectionEdge','PageToRevisionConnectionEdge','UserToPageConnectionEdge','PostToCategoryConnectionEdge','PostToCommentConnectionEdge','PostFormatToContentNodeConnectionEdge','PostFormatToPostConnectionEdge','PostFormatToTaxonomyConnectionEdge','PostToPostFormatConnectionEdge','PostToPreviewConnectionEdge','PostToRevisionConnectionEdge','TagToContentNodeConnectionEdge','TagToPostConnectionEdge','TagToTaxonomyConnectionEdge','PostToTagConnectionEdge','PostToTermNodeConnectionEdge','UserToPostConnectionEdge','UserToRevisionsConnectionEdge','UserToUserRoleConnectionEdge','CategoryToContentNodeConnectionEdge','CategoryToParentCategoryConnectionEdge','CategoryToPostConnectionEdge','CategoryToTaxonomyConnectionEdge','RootQueryToCategoryConnectionEdge','RootQueryToCommentConnectionEdge','RootQueryToContentNodeConnectionEdge','RootQueryToContentTypeConnectionEdge','RootQueryToMediaItemConnectionEdge','MenuItemToMenuItemConnectionEdge','MenuItemToMenuItemLinkableConnectionEdge','MenuItemToMenuConnectionEdge','MenuToMenuItemConnectionEdge','RootQueryToMenuItemConnectionEdge','RootQueryToMenuConnectionEdge','RootQueryToPageConnectionEdge','RootQueryToPluginConnectionEdge','RootQueryToPostFormatConnectionEdge','RootQueryToPostConnectionEdge','RootQueryToEnqueuedScriptConnectionEdge','RootQueryToEnqueuedStylesheetConnectionEdge','RootQueryToRevisionsConnectionEdge','RootQueryToTagConnectionEdge','RootQueryToTaxonomyConnectionEdge','RootQueryToTermNodeConnectionEdge','RootQueryToThemeConnectionEdge','RootQueryToUserRoleConnectionEdge','RootQueryToUserConnectionEdge']
export var isEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEdge"')
  return Edge_possibleTypes.includes(obj.__typename)
}



var Node_possibleTypes = ['Category','EnqueuedScript','EnqueuedStylesheet','ContentType','Taxonomy','User','Comment','MediaItem','Page','Post','PostFormat','Tag','UserRole','Menu','MenuItem','Plugin','Theme','CommentAuthor']
export var isNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNode"')
  return Node_possibleTypes.includes(obj.__typename)
}



var PageInfo_possibleTypes = ['TermNodeToEnqueuedScriptConnectionPageInfo','TermNodeToEnqueuedStylesheetConnectionPageInfo','CategoryToAncestorsCategoryConnectionPageInfo','CategoryToCategoryConnectionPageInfo','TaxonomyToContentTypeConnectionPageInfo','ContentTypeToTaxonomyConnectionPageInfo','ContentTypeToContentNodeConnectionPageInfo','CommentToCommentConnectionPageInfo','UserToCommentConnectionPageInfo','UserToEnqueuedScriptConnectionPageInfo','UserToEnqueuedStylesheetConnectionPageInfo','HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo','HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo','ContentNodeToEnqueuedScriptConnectionPageInfo','ContentNodeToEnqueuedStylesheetConnectionPageInfo','MediaItemToCommentConnectionPageInfo','UserToMediaItemConnectionPageInfo','PageToCommentConnectionPageInfo','PageToRevisionConnectionPageInfo','UserToPageConnectionPageInfo','PostToCategoryConnectionPageInfo','PostToCommentConnectionPageInfo','PostFormatToContentNodeConnectionPageInfo','PostFormatToPostConnectionPageInfo','PostToPostFormatConnectionPageInfo','PostToRevisionConnectionPageInfo','TagToContentNodeConnectionPageInfo','TagToPostConnectionPageInfo','PostToTagConnectionPageInfo','PostToTermNodeConnectionPageInfo','UserToPostConnectionPageInfo','UserToRevisionsConnectionPageInfo','UserToUserRoleConnectionPageInfo','CategoryToContentNodeConnectionPageInfo','CategoryToPostConnectionPageInfo','RootQueryToCategoryConnectionPageInfo','RootQueryToCommentConnectionPageInfo','RootQueryToContentNodeConnectionPageInfo','RootQueryToContentTypeConnectionPageInfo','RootQueryToMediaItemConnectionPageInfo','MenuItemToMenuItemConnectionPageInfo','MenuToMenuItemConnectionPageInfo','RootQueryToMenuItemConnectionPageInfo','RootQueryToMenuConnectionPageInfo','RootQueryToPageConnectionPageInfo','RootQueryToPluginConnectionPageInfo','RootQueryToPostFormatConnectionPageInfo','RootQueryToPostConnectionPageInfo','RootQueryToEnqueuedScriptConnectionPageInfo','RootQueryToEnqueuedStylesheetConnectionPageInfo','RootQueryToRevisionsConnectionPageInfo','RootQueryToTagConnectionPageInfo','RootQueryToTaxonomyConnectionPageInfo','RootQueryToTermNodeConnectionPageInfo','RootQueryToThemeConnectionPageInfo','RootQueryToUserRoleConnectionPageInfo','RootQueryToUserConnectionPageInfo']
export var isPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



var CategoryConnectionEdge_possibleTypes = ['CategoryToAncestorsCategoryConnectionEdge','CategoryToCategoryConnectionEdge','PostToCategoryConnectionEdge','CategoryToParentCategoryConnectionEdge','RootQueryToCategoryConnectionEdge']
export var isCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryConnectionEdge"')
  return CategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Category_possibleTypes = ['Category']
export var isCategory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategory"')
  return Category_possibleTypes.includes(obj.__typename)
}



var TermNode_possibleTypes = ['Category','PostFormat','Tag']
export var isTermNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNode"')
  return TermNode_possibleTypes.includes(obj.__typename)
}



var UniformResourceIdentifiable_possibleTypes = ['Category','ContentType','User','MediaItem','Page','Post','PostFormat','Tag']
export var isUniformResourceIdentifiable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUniformResourceIdentifiable"')
  return UniformResourceIdentifiable_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedScriptConnection_possibleTypes = ['TermNodeToEnqueuedScriptConnection']
export var isTermNodeToEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedScriptConnection"')
  return TermNodeToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var EnqueuedScriptConnection_possibleTypes = ['TermNodeToEnqueuedScriptConnection','UserToEnqueuedScriptConnection','ContentNodeToEnqueuedScriptConnection','RootQueryToEnqueuedScriptConnection']
export var isEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedScriptConnection"')
  return EnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var EnqueuedScriptConnectionEdge_possibleTypes = ['TermNodeToEnqueuedScriptConnectionEdge','UserToEnqueuedScriptConnectionEdge','ContentNodeToEnqueuedScriptConnectionEdge','RootQueryToEnqueuedScriptConnectionEdge']
export var isEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedScriptConnectionEdge"')
  return EnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var EnqueuedScript_possibleTypes = ['EnqueuedScript']
export var isEnqueuedScript = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedScript"')
  return EnqueuedScript_possibleTypes.includes(obj.__typename)
}



var EnqueuedAsset_possibleTypes = ['EnqueuedScript','EnqueuedStylesheet']
export var isEnqueuedAsset = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedAsset"')
  return EnqueuedAsset_possibleTypes.includes(obj.__typename)
}



var EnqueuedScriptConnectionPageInfo_possibleTypes = ['TermNodeToEnqueuedScriptConnectionPageInfo','UserToEnqueuedScriptConnectionPageInfo','ContentNodeToEnqueuedScriptConnectionPageInfo','RootQueryToEnqueuedScriptConnectionPageInfo']
export var isEnqueuedScriptConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedScriptConnectionPageInfo"')
  return EnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var WPPageInfo_possibleTypes = ['TermNodeToEnqueuedScriptConnectionPageInfo','TermNodeToEnqueuedStylesheetConnectionPageInfo','CategoryToAncestorsCategoryConnectionPageInfo','CategoryToCategoryConnectionPageInfo','TaxonomyToContentTypeConnectionPageInfo','ContentTypeToTaxonomyConnectionPageInfo','ContentTypeToContentNodeConnectionPageInfo','CommentToCommentConnectionPageInfo','UserToCommentConnectionPageInfo','UserToEnqueuedScriptConnectionPageInfo','UserToEnqueuedStylesheetConnectionPageInfo','HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo','HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo','ContentNodeToEnqueuedScriptConnectionPageInfo','ContentNodeToEnqueuedStylesheetConnectionPageInfo','MediaItemToCommentConnectionPageInfo','UserToMediaItemConnectionPageInfo','PageToCommentConnectionPageInfo','PageToRevisionConnectionPageInfo','UserToPageConnectionPageInfo','PostToCategoryConnectionPageInfo','PostToCommentConnectionPageInfo','PostFormatToContentNodeConnectionPageInfo','PostFormatToPostConnectionPageInfo','PostToPostFormatConnectionPageInfo','PostToRevisionConnectionPageInfo','TagToContentNodeConnectionPageInfo','TagToPostConnectionPageInfo','PostToTagConnectionPageInfo','PostToTermNodeConnectionPageInfo','UserToPostConnectionPageInfo','UserToRevisionsConnectionPageInfo','UserToUserRoleConnectionPageInfo','CategoryToContentNodeConnectionPageInfo','CategoryToPostConnectionPageInfo','RootQueryToCategoryConnectionPageInfo','RootQueryToCommentConnectionPageInfo','RootQueryToContentNodeConnectionPageInfo','RootQueryToContentTypeConnectionPageInfo','RootQueryToMediaItemConnectionPageInfo','MenuItemToMenuItemConnectionPageInfo','MenuToMenuItemConnectionPageInfo','RootQueryToMenuItemConnectionPageInfo','RootQueryToMenuConnectionPageInfo','RootQueryToPageConnectionPageInfo','RootQueryToPluginConnectionPageInfo','RootQueryToPostFormatConnectionPageInfo','RootQueryToPostConnectionPageInfo','RootQueryToEnqueuedScriptConnectionPageInfo','RootQueryToEnqueuedStylesheetConnectionPageInfo','RootQueryToRevisionsConnectionPageInfo','RootQueryToTagConnectionPageInfo','RootQueryToTaxonomyConnectionPageInfo','RootQueryToTermNodeConnectionPageInfo','RootQueryToThemeConnectionPageInfo','RootQueryToUserRoleConnectionPageInfo','RootQueryToUserConnectionPageInfo']
export var isWPPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWPPageInfo"')
  return WPPageInfo_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedScriptConnectionEdge_possibleTypes = ['TermNodeToEnqueuedScriptConnectionEdge']
export var isTermNodeToEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedScriptConnectionEdge"')
  return TermNodeToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedScriptConnectionPageInfo_possibleTypes = ['TermNodeToEnqueuedScriptConnectionPageInfo']
export var isTermNodeToEnqueuedScriptConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedScriptConnectionPageInfo"')
  return TermNodeToEnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedStylesheetConnection_possibleTypes = ['TermNodeToEnqueuedStylesheetConnection']
export var isTermNodeToEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedStylesheetConnection"')
  return TermNodeToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var EnqueuedStylesheetConnection_possibleTypes = ['TermNodeToEnqueuedStylesheetConnection','UserToEnqueuedStylesheetConnection','ContentNodeToEnqueuedStylesheetConnection','RootQueryToEnqueuedStylesheetConnection']
export var isEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheetConnection"')
  return EnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var EnqueuedStylesheetConnectionEdge_possibleTypes = ['TermNodeToEnqueuedStylesheetConnectionEdge','UserToEnqueuedStylesheetConnectionEdge','ContentNodeToEnqueuedStylesheetConnectionEdge','RootQueryToEnqueuedStylesheetConnectionEdge']
export var isEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheetConnectionEdge"')
  return EnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var EnqueuedStylesheet_possibleTypes = ['EnqueuedStylesheet']
export var isEnqueuedStylesheet = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheet"')
  return EnqueuedStylesheet_possibleTypes.includes(obj.__typename)
}



var EnqueuedStylesheetConnectionPageInfo_possibleTypes = ['TermNodeToEnqueuedStylesheetConnectionPageInfo','UserToEnqueuedStylesheetConnectionPageInfo','ContentNodeToEnqueuedStylesheetConnectionPageInfo','RootQueryToEnqueuedStylesheetConnectionPageInfo']
export var isEnqueuedStylesheetConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheetConnectionPageInfo"')
  return EnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedStylesheetConnectionEdge_possibleTypes = ['TermNodeToEnqueuedStylesheetConnectionEdge']
export var isTermNodeToEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedStylesheetConnectionEdge"')
  return TermNodeToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedStylesheetConnectionPageInfo_possibleTypes = ['TermNodeToEnqueuedStylesheetConnectionPageInfo']
export var isTermNodeToEnqueuedStylesheetConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedStylesheetConnectionPageInfo"')
  return TermNodeToEnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var DatabaseIdentifier_possibleTypes = ['Category','User','Comment','MediaItem','Page','Post','PostFormat','Tag','Menu','MenuItem','CommentAuthor']
export var isDatabaseIdentifier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDatabaseIdentifier"')
  return DatabaseIdentifier_possibleTypes.includes(obj.__typename)
}



var HierarchicalTermNode_possibleTypes = ['Category']
export var isHierarchicalTermNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalTermNode"')
  return HierarchicalTermNode_possibleTypes.includes(obj.__typename)
}



var HierarchicalNode_possibleTypes = ['Category','MediaItem','Page']
export var isHierarchicalNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalNode"')
  return HierarchicalNode_possibleTypes.includes(obj.__typename)
}



var MenuItemLinkable_possibleTypes = ['Category','Page','Post','Tag']
export var isMenuItemLinkable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemLinkable"')
  return MenuItemLinkable_possibleTypes.includes(obj.__typename)
}



var CategoryToAncestorsCategoryConnection_possibleTypes = ['CategoryToAncestorsCategoryConnection']
export var isCategoryToAncestorsCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToAncestorsCategoryConnection"')
  return CategoryToAncestorsCategoryConnection_possibleTypes.includes(obj.__typename)
}



var CategoryToAncestorsCategoryConnectionEdge_possibleTypes = ['CategoryToAncestorsCategoryConnectionEdge']
export var isCategoryToAncestorsCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToAncestorsCategoryConnectionEdge"')
  return CategoryToAncestorsCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToAncestorsCategoryConnectionPageInfo_possibleTypes = ['CategoryToAncestorsCategoryConnectionPageInfo']
export var isCategoryToAncestorsCategoryConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToAncestorsCategoryConnectionPageInfo"')
  return CategoryToAncestorsCategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var CategoryConnectionPageInfo_possibleTypes = ['CategoryToAncestorsCategoryConnectionPageInfo','CategoryToCategoryConnectionPageInfo','PostToCategoryConnectionPageInfo','RootQueryToCategoryConnectionPageInfo']
export var isCategoryConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryConnectionPageInfo"')
  return CategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var CategoryToCategoryConnection_possibleTypes = ['CategoryToCategoryConnection']
export var isCategoryToCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToCategoryConnection"')
  return CategoryToCategoryConnection_possibleTypes.includes(obj.__typename)
}



var CategoryToCategoryConnectionEdge_possibleTypes = ['CategoryToCategoryConnectionEdge']
export var isCategoryToCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToCategoryConnectionEdge"')
  return CategoryToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToCategoryConnectionPageInfo_possibleTypes = ['CategoryToCategoryConnectionPageInfo']
export var isCategoryToCategoryConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToCategoryConnectionPageInfo"')
  return CategoryToCategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var CategoryToContentNodeConnection_possibleTypes = ['CategoryToContentNodeConnection']
export var isCategoryToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToContentNodeConnection"')
  return CategoryToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var ContentNodeConnection_possibleTypes = ['CategoryToContentNodeConnection','ContentTypeToContentNodeConnection','HierarchicalContentNodeToContentNodeAncestorsConnection','HierarchicalContentNodeToContentNodeChildrenConnection','PostFormatToContentNodeConnection','TagToContentNodeConnection','UserToRevisionsConnection','RootQueryToContentNodeConnection','RootQueryToRevisionsConnection']
export var isContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeConnection"')
  return ContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var ContentNodeConnectionEdge_possibleTypes = ['ContentTypeToContentNodeConnectionEdge','CommentToContentNodeConnectionEdge','HierarchicalContentNodeToContentNodeAncestorsConnectionEdge','HierarchicalContentNodeToContentNodeChildrenConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','PostFormatToContentNodeConnectionEdge','TagToContentNodeConnectionEdge','UserToRevisionsConnectionEdge','CategoryToContentNodeConnectionEdge','RootQueryToContentNodeConnectionEdge','RootQueryToRevisionsConnectionEdge']
export var isContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeConnectionEdge"')
  return ContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentNode_possibleTypes = ['MediaItem','Page','Post']
export var isContentNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNode"')
  return ContentNode_possibleTypes.includes(obj.__typename)
}



var ContentNodeToContentTypeConnectionEdge_possibleTypes = ['ContentNodeToContentTypeConnectionEdge']
export var isContentNodeToContentTypeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToContentTypeConnectionEdge"')
  return ContentNodeToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var OneToOneConnection_possibleTypes = ['ContentNodeToContentTypeConnectionEdge','ContentNodeToEditLockConnectionEdge','CommentToCommenterConnectionEdge','CommentToContentNodeConnectionEdge','CommentToParentCommentConnectionEdge','NodeWithAuthorToUserConnectionEdge','ContentNodeToEditLastConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','PageToPreviewConnectionEdge','PostFormatToTaxonomyConnectionEdge','PostToPreviewConnectionEdge','TagToTaxonomyConnectionEdge','CategoryToParentCategoryConnectionEdge','CategoryToTaxonomyConnectionEdge','MenuItemToMenuItemLinkableConnectionEdge','MenuItemToMenuConnectionEdge']
export var isOneToOneConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOneToOneConnection"')
  return OneToOneConnection_possibleTypes.includes(obj.__typename)
}



var ContentTypeConnectionEdge_possibleTypes = ['ContentNodeToContentTypeConnectionEdge','TaxonomyToContentTypeConnectionEdge','RootQueryToContentTypeConnectionEdge']
export var isContentTypeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeConnectionEdge"')
  return ContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentType_possibleTypes = ['ContentType']
export var isContentType = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentType"')
  return ContentType_possibleTypes.includes(obj.__typename)
}



var ContentTypeToTaxonomyConnection_possibleTypes = ['ContentTypeToTaxonomyConnection']
export var isContentTypeToTaxonomyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToTaxonomyConnection"')
  return ContentTypeToTaxonomyConnection_possibleTypes.includes(obj.__typename)
}



var TaxonomyConnection_possibleTypes = ['ContentTypeToTaxonomyConnection','RootQueryToTaxonomyConnection']
export var isTaxonomyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyConnection"')
  return TaxonomyConnection_possibleTypes.includes(obj.__typename)
}



var TaxonomyConnectionEdge_possibleTypes = ['ContentTypeToTaxonomyConnectionEdge','PostFormatToTaxonomyConnectionEdge','TagToTaxonomyConnectionEdge','CategoryToTaxonomyConnectionEdge','RootQueryToTaxonomyConnectionEdge']
export var isTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyConnectionEdge"')
  return TaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Taxonomy_possibleTypes = ['Taxonomy']
export var isTaxonomy = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomy"')
  return Taxonomy_possibleTypes.includes(obj.__typename)
}



var TaxonomyToContentTypeConnection_possibleTypes = ['TaxonomyToContentTypeConnection']
export var isTaxonomyToContentTypeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyToContentTypeConnection"')
  return TaxonomyToContentTypeConnection_possibleTypes.includes(obj.__typename)
}



var ContentTypeConnection_possibleTypes = ['TaxonomyToContentTypeConnection','RootQueryToContentTypeConnection']
export var isContentTypeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeConnection"')
  return ContentTypeConnection_possibleTypes.includes(obj.__typename)
}



var ContentTypeConnectionPageInfo_possibleTypes = ['TaxonomyToContentTypeConnectionPageInfo','RootQueryToContentTypeConnectionPageInfo']
export var isContentTypeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeConnectionPageInfo"')
  return ContentTypeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var TaxonomyToContentTypeConnectionEdge_possibleTypes = ['TaxonomyToContentTypeConnectionEdge']
export var isTaxonomyToContentTypeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyToContentTypeConnectionEdge"')
  return TaxonomyToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TaxonomyToContentTypeConnectionPageInfo_possibleTypes = ['TaxonomyToContentTypeConnectionPageInfo']
export var isTaxonomyToContentTypeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyToContentTypeConnectionPageInfo"')
  return TaxonomyToContentTypeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var TaxonomyConnectionPageInfo_possibleTypes = ['ContentTypeToTaxonomyConnectionPageInfo','RootQueryToTaxonomyConnectionPageInfo']
export var isTaxonomyConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyConnectionPageInfo"')
  return TaxonomyConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var ContentTypeToTaxonomyConnectionEdge_possibleTypes = ['ContentTypeToTaxonomyConnectionEdge']
export var isContentTypeToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToTaxonomyConnectionEdge"')
  return ContentTypeToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentTypeToTaxonomyConnectionPageInfo_possibleTypes = ['ContentTypeToTaxonomyConnectionPageInfo']
export var isContentTypeToTaxonomyConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToTaxonomyConnectionPageInfo"')
  return ContentTypeToTaxonomyConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var ContentTypeToContentNodeConnection_possibleTypes = ['ContentTypeToContentNodeConnection']
export var isContentTypeToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToContentNodeConnection"')
  return ContentTypeToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var ContentTypeToContentNodeConnectionEdge_possibleTypes = ['ContentTypeToContentNodeConnectionEdge']
export var isContentTypeToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToContentNodeConnectionEdge"')
  return ContentTypeToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentTypeToContentNodeConnectionPageInfo_possibleTypes = ['ContentTypeToContentNodeConnectionPageInfo']
export var isContentTypeToContentNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToContentNodeConnectionPageInfo"')
  return ContentTypeToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var ContentNodeConnectionPageInfo_possibleTypes = ['ContentTypeToContentNodeConnectionPageInfo','HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo','HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo','PostFormatToContentNodeConnectionPageInfo','TagToContentNodeConnectionPageInfo','UserToRevisionsConnectionPageInfo','CategoryToContentNodeConnectionPageInfo','RootQueryToContentNodeConnectionPageInfo','RootQueryToRevisionsConnectionPageInfo']
export var isContentNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeConnectionPageInfo"')
  return ContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostTypeLabelDetails_possibleTypes = ['PostTypeLabelDetails']
export var isPostTypeLabelDetails = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostTypeLabelDetails"')
  return PostTypeLabelDetails_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEditLockConnectionEdge_possibleTypes = ['ContentNodeToEditLockConnectionEdge']
export var isContentNodeToEditLockConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEditLockConnectionEdge"')
  return ContentNodeToEditLockConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserConnectionEdge_possibleTypes = ['ContentNodeToEditLockConnectionEdge','NodeWithAuthorToUserConnectionEdge','ContentNodeToEditLastConnectionEdge','RootQueryToUserConnectionEdge']
export var isUserConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserConnectionEdge"')
  return UserConnectionEdge_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
export var isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



var Commenter_possibleTypes = ['User','CommentAuthor']
export var isCommenter = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommenter"')
  return Commenter_possibleTypes.includes(obj.__typename)
}



var Avatar_possibleTypes = ['Avatar']
export var isAvatar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAvatar"')
  return Avatar_possibleTypes.includes(obj.__typename)
}



var UserToCommentConnection_possibleTypes = ['UserToCommentConnection']
export var isUserToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToCommentConnection"')
  return UserToCommentConnection_possibleTypes.includes(obj.__typename)
}



var CommentConnection_possibleTypes = ['UserToCommentConnection','CommentToCommentConnection','MediaItemToCommentConnection','PageToCommentConnection','PostToCommentConnection','RootQueryToCommentConnection']
export var isCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentConnection"')
  return CommentConnection_possibleTypes.includes(obj.__typename)
}



var CommentConnectionEdge_possibleTypes = ['CommentToParentCommentConnectionEdge','CommentToCommentConnectionEdge','UserToCommentConnectionEdge','MediaItemToCommentConnectionEdge','PageToCommentConnectionEdge','PostToCommentConnectionEdge','RootQueryToCommentConnectionEdge']
export var isCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentConnectionEdge"')
  return CommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Comment_possibleTypes = ['Comment']
export var isComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isComment"')
  return Comment_possibleTypes.includes(obj.__typename)
}



var CommentToCommenterConnectionEdge_possibleTypes = ['CommentToCommenterConnectionEdge']
export var isCommentToCommenterConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToCommenterConnectionEdge"')
  return CommentToCommenterConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommenterConnectionEdge_possibleTypes = ['CommentToCommenterConnectionEdge']
export var isCommenterConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommenterConnectionEdge"')
  return CommenterConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommentToContentNodeConnectionEdge_possibleTypes = ['CommentToContentNodeConnectionEdge']
export var isCommentToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToContentNodeConnectionEdge"')
  return CommentToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommentToParentCommentConnectionEdge_possibleTypes = ['CommentToParentCommentConnectionEdge']
export var isCommentToParentCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToParentCommentConnectionEdge"')
  return CommentToParentCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommentToCommentConnection_possibleTypes = ['CommentToCommentConnection']
export var isCommentToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToCommentConnection"')
  return CommentToCommentConnection_possibleTypes.includes(obj.__typename)
}



var CommentToCommentConnectionEdge_possibleTypes = ['CommentToCommentConnectionEdge']
export var isCommentToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToCommentConnectionEdge"')
  return CommentToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommentToCommentConnectionPageInfo_possibleTypes = ['CommentToCommentConnectionPageInfo']
export var isCommentToCommentConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToCommentConnectionPageInfo"')
  return CommentToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var CommentConnectionPageInfo_possibleTypes = ['CommentToCommentConnectionPageInfo','UserToCommentConnectionPageInfo','MediaItemToCommentConnectionPageInfo','PageToCommentConnectionPageInfo','PostToCommentConnectionPageInfo','RootQueryToCommentConnectionPageInfo']
export var isCommentConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentConnectionPageInfo"')
  return CommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToCommentConnectionEdge_possibleTypes = ['UserToCommentConnectionEdge']
export var isUserToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToCommentConnectionEdge"')
  return UserToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToCommentConnectionPageInfo_possibleTypes = ['UserToCommentConnectionPageInfo']
export var isUserToCommentConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToCommentConnectionPageInfo"')
  return UserToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedScriptConnection_possibleTypes = ['UserToEnqueuedScriptConnection']
export var isUserToEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedScriptConnection"')
  return UserToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedScriptConnectionEdge_possibleTypes = ['UserToEnqueuedScriptConnectionEdge']
export var isUserToEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedScriptConnectionEdge"')
  return UserToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedScriptConnectionPageInfo_possibleTypes = ['UserToEnqueuedScriptConnectionPageInfo']
export var isUserToEnqueuedScriptConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedScriptConnectionPageInfo"')
  return UserToEnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedStylesheetConnection_possibleTypes = ['UserToEnqueuedStylesheetConnection']
export var isUserToEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedStylesheetConnection"')
  return UserToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedStylesheetConnectionEdge_possibleTypes = ['UserToEnqueuedStylesheetConnectionEdge']
export var isUserToEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedStylesheetConnectionEdge"')
  return UserToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedStylesheetConnectionPageInfo_possibleTypes = ['UserToEnqueuedStylesheetConnectionPageInfo']
export var isUserToEnqueuedStylesheetConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedStylesheetConnectionPageInfo"')
  return UserToEnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToMediaItemConnection_possibleTypes = ['UserToMediaItemConnection']
export var isUserToMediaItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToMediaItemConnection"')
  return UserToMediaItemConnection_possibleTypes.includes(obj.__typename)
}



var MediaItemConnection_possibleTypes = ['UserToMediaItemConnection','RootQueryToMediaItemConnection']
export var isMediaItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemConnection"')
  return MediaItemConnection_possibleTypes.includes(obj.__typename)
}



var MediaItemConnectionEdge_possibleTypes = ['UserToMediaItemConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','RootQueryToMediaItemConnectionEdge']
export var isMediaItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemConnectionEdge"')
  return MediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MediaItem_possibleTypes = ['MediaItem']
export var isMediaItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItem"')
  return MediaItem_possibleTypes.includes(obj.__typename)
}



var NodeWithTemplate_possibleTypes = ['MediaItem','Page','Post']
export var isNodeWithTemplate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithTemplate"')
  return NodeWithTemplate_possibleTypes.includes(obj.__typename)
}



var ContentTemplate_possibleTypes = ['DefaultTemplate','Template_Blank','Template_BlogAlternative']
export var isContentTemplate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTemplate"')
  return ContentTemplate_possibleTypes.includes(obj.__typename)
}



var NodeWithTitle_possibleTypes = ['MediaItem','Page','Post']
export var isNodeWithTitle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithTitle"')
  return NodeWithTitle_possibleTypes.includes(obj.__typename)
}



var NodeWithAuthor_possibleTypes = ['MediaItem','Page','Post']
export var isNodeWithAuthor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithAuthor"')
  return NodeWithAuthor_possibleTypes.includes(obj.__typename)
}



var NodeWithAuthorToUserConnectionEdge_possibleTypes = ['NodeWithAuthorToUserConnectionEdge']
export var isNodeWithAuthorToUserConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithAuthorToUserConnectionEdge"')
  return NodeWithAuthorToUserConnectionEdge_possibleTypes.includes(obj.__typename)
}



var NodeWithComments_possibleTypes = ['MediaItem','Page','Post']
export var isNodeWithComments = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithComments"')
  return NodeWithComments_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNode_possibleTypes = ['MediaItem','Page']
export var isHierarchicalContentNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNode"')
  return HierarchicalContentNode_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeAncestorsConnection_possibleTypes = ['HierarchicalContentNodeToContentNodeAncestorsConnection']
export var isHierarchicalContentNodeToContentNodeAncestorsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeAncestorsConnection"')
  return HierarchicalContentNodeToContentNodeAncestorsConnection_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeAncestorsConnectionEdge_possibleTypes = ['HierarchicalContentNodeToContentNodeAncestorsConnectionEdge']
export var isHierarchicalContentNodeToContentNodeAncestorsConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeAncestorsConnectionEdge"')
  return HierarchicalContentNodeToContentNodeAncestorsConnectionEdge_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo_possibleTypes = ['HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo']
export var isHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo"')
  return HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeChildrenConnection_possibleTypes = ['HierarchicalContentNodeToContentNodeChildrenConnection']
export var isHierarchicalContentNodeToContentNodeChildrenConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeChildrenConnection"')
  return HierarchicalContentNodeToContentNodeChildrenConnection_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeChildrenConnectionEdge_possibleTypes = ['HierarchicalContentNodeToContentNodeChildrenConnectionEdge']
export var isHierarchicalContentNodeToContentNodeChildrenConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeChildrenConnectionEdge"')
  return HierarchicalContentNodeToContentNodeChildrenConnectionEdge_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo_possibleTypes = ['HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo']
export var isHierarchicalContentNodeToContentNodeChildrenConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeChildrenConnectionPageInfo"')
  return HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedScriptConnection_possibleTypes = ['ContentNodeToEnqueuedScriptConnection']
export var isContentNodeToEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedScriptConnection"')
  return ContentNodeToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedScriptConnectionEdge_possibleTypes = ['ContentNodeToEnqueuedScriptConnectionEdge']
export var isContentNodeToEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedScriptConnectionEdge"')
  return ContentNodeToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedScriptConnectionPageInfo_possibleTypes = ['ContentNodeToEnqueuedScriptConnectionPageInfo']
export var isContentNodeToEnqueuedScriptConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedScriptConnectionPageInfo"')
  return ContentNodeToEnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedStylesheetConnection_possibleTypes = ['ContentNodeToEnqueuedStylesheetConnection']
export var isContentNodeToEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedStylesheetConnection"')
  return ContentNodeToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedStylesheetConnectionEdge_possibleTypes = ['ContentNodeToEnqueuedStylesheetConnectionEdge']
export var isContentNodeToEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedStylesheetConnectionEdge"')
  return ContentNodeToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedStylesheetConnectionPageInfo_possibleTypes = ['ContentNodeToEnqueuedStylesheetConnectionPageInfo']
export var isContentNodeToEnqueuedStylesheetConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedStylesheetConnectionPageInfo"')
  return ContentNodeToEnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEditLastConnectionEdge_possibleTypes = ['ContentNodeToEditLastConnectionEdge']
export var isContentNodeToEditLastConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEditLastConnectionEdge"')
  return ContentNodeToEditLastConnectionEdge_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToParentContentNodeConnectionEdge_possibleTypes = ['HierarchicalContentNodeToParentContentNodeConnectionEdge']
export var isHierarchicalContentNodeToParentContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToParentContentNodeConnectionEdge"')
  return HierarchicalContentNodeToParentContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MediaItemToCommentConnection_possibleTypes = ['MediaItemToCommentConnection']
export var isMediaItemToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemToCommentConnection"')
  return MediaItemToCommentConnection_possibleTypes.includes(obj.__typename)
}



var MediaItemToCommentConnectionEdge_possibleTypes = ['MediaItemToCommentConnectionEdge']
export var isMediaItemToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemToCommentConnectionEdge"')
  return MediaItemToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MediaItemToCommentConnectionPageInfo_possibleTypes = ['MediaItemToCommentConnectionPageInfo']
export var isMediaItemToCommentConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemToCommentConnectionPageInfo"')
  return MediaItemToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var MediaDetails_possibleTypes = ['MediaDetails']
export var isMediaDetails = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaDetails"')
  return MediaDetails_possibleTypes.includes(obj.__typename)
}



var MediaItemMeta_possibleTypes = ['MediaItemMeta']
export var isMediaItemMeta = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemMeta"')
  return MediaItemMeta_possibleTypes.includes(obj.__typename)
}



var MediaSize_possibleTypes = ['MediaSize']
export var isMediaSize = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaSize"')
  return MediaSize_possibleTypes.includes(obj.__typename)
}



var MediaItemConnectionPageInfo_possibleTypes = ['UserToMediaItemConnectionPageInfo','RootQueryToMediaItemConnectionPageInfo']
export var isMediaItemConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemConnectionPageInfo"')
  return MediaItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToMediaItemConnectionEdge_possibleTypes = ['UserToMediaItemConnectionEdge']
export var isUserToMediaItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToMediaItemConnectionEdge"')
  return UserToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToMediaItemConnectionPageInfo_possibleTypes = ['UserToMediaItemConnectionPageInfo']
export var isUserToMediaItemConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToMediaItemConnectionPageInfo"')
  return UserToMediaItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToPageConnection_possibleTypes = ['UserToPageConnection']
export var isUserToPageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPageConnection"')
  return UserToPageConnection_possibleTypes.includes(obj.__typename)
}



var PageConnection_possibleTypes = ['UserToPageConnection','PageToRevisionConnection','RootQueryToPageConnection']
export var isPageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageConnection"')
  return PageConnection_possibleTypes.includes(obj.__typename)
}



var PageConnectionEdge_possibleTypes = ['PageToPreviewConnectionEdge','PageToRevisionConnectionEdge','UserToPageConnectionEdge','RootQueryToPageConnectionEdge']
export var isPageConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageConnectionEdge"')
  return PageConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Page_possibleTypes = ['Page']
export var isPage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPage"')
  return Page_possibleTypes.includes(obj.__typename)
}



var Previewable_possibleTypes = ['Page','Post']
export var isPreviewable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPreviewable"')
  return Previewable_possibleTypes.includes(obj.__typename)
}



var NodeWithContentEditor_possibleTypes = ['Page','Post']
export var isNodeWithContentEditor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithContentEditor"')
  return NodeWithContentEditor_possibleTypes.includes(obj.__typename)
}



var NodeWithFeaturedImage_possibleTypes = ['Page','Post']
export var isNodeWithFeaturedImage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithFeaturedImage"')
  return NodeWithFeaturedImage_possibleTypes.includes(obj.__typename)
}



var NodeWithFeaturedImageToMediaItemConnectionEdge_possibleTypes = ['NodeWithFeaturedImageToMediaItemConnectionEdge']
export var isNodeWithFeaturedImageToMediaItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithFeaturedImageToMediaItemConnectionEdge"')
  return NodeWithFeaturedImageToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var NodeWithRevisions_possibleTypes = ['Page','Post']
export var isNodeWithRevisions = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithRevisions"')
  return NodeWithRevisions_possibleTypes.includes(obj.__typename)
}



var NodeWithRevisionsToContentNodeConnectionEdge_possibleTypes = ['NodeWithRevisionsToContentNodeConnectionEdge']
export var isNodeWithRevisionsToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithRevisionsToContentNodeConnectionEdge"')
  return NodeWithRevisionsToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var NodeWithPageAttributes_possibleTypes = ['Page']
export var isNodeWithPageAttributes = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithPageAttributes"')
  return NodeWithPageAttributes_possibleTypes.includes(obj.__typename)
}



var PageToCommentConnection_possibleTypes = ['PageToCommentConnection']
export var isPageToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToCommentConnection"')
  return PageToCommentConnection_possibleTypes.includes(obj.__typename)
}



var PageToCommentConnectionEdge_possibleTypes = ['PageToCommentConnectionEdge']
export var isPageToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToCommentConnectionEdge"')
  return PageToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PageToCommentConnectionPageInfo_possibleTypes = ['PageToCommentConnectionPageInfo']
export var isPageToCommentConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToCommentConnectionPageInfo"')
  return PageToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PageToPreviewConnectionEdge_possibleTypes = ['PageToPreviewConnectionEdge']
export var isPageToPreviewConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToPreviewConnectionEdge"')
  return PageToPreviewConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PageToRevisionConnection_possibleTypes = ['PageToRevisionConnection']
export var isPageToRevisionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToRevisionConnection"')
  return PageToRevisionConnection_possibleTypes.includes(obj.__typename)
}



var PageToRevisionConnectionEdge_possibleTypes = ['PageToRevisionConnectionEdge']
export var isPageToRevisionConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToRevisionConnectionEdge"')
  return PageToRevisionConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PageToRevisionConnectionPageInfo_possibleTypes = ['PageToRevisionConnectionPageInfo']
export var isPageToRevisionConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToRevisionConnectionPageInfo"')
  return PageToRevisionConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PageConnectionPageInfo_possibleTypes = ['PageToRevisionConnectionPageInfo','UserToPageConnectionPageInfo','RootQueryToPageConnectionPageInfo']
export var isPageConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageConnectionPageInfo"')
  return PageConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToPageConnectionEdge_possibleTypes = ['UserToPageConnectionEdge']
export var isUserToPageConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPageConnectionEdge"')
  return UserToPageConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToPageConnectionPageInfo_possibleTypes = ['UserToPageConnectionPageInfo']
export var isUserToPageConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPageConnectionPageInfo"')
  return UserToPageConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToPostConnection_possibleTypes = ['UserToPostConnection']
export var isUserToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPostConnection"')
  return UserToPostConnection_possibleTypes.includes(obj.__typename)
}



var PostConnection_possibleTypes = ['UserToPostConnection','PostFormatToPostConnection','PostToRevisionConnection','TagToPostConnection','CategoryToPostConnection','RootQueryToPostConnection']
export var isPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostConnection"')
  return PostConnection_possibleTypes.includes(obj.__typename)
}



var PostConnectionEdge_possibleTypes = ['PostFormatToPostConnectionEdge','PostToPreviewConnectionEdge','PostToRevisionConnectionEdge','TagToPostConnectionEdge','UserToPostConnectionEdge','CategoryToPostConnectionEdge','RootQueryToPostConnectionEdge']
export var isPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostConnectionEdge"')
  return PostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Post_possibleTypes = ['Post']
export var isPost = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPost"')
  return Post_possibleTypes.includes(obj.__typename)
}



var NodeWithExcerpt_possibleTypes = ['Post']
export var isNodeWithExcerpt = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithExcerpt"')
  return NodeWithExcerpt_possibleTypes.includes(obj.__typename)
}



var NodeWithTrackbacks_possibleTypes = ['Post']
export var isNodeWithTrackbacks = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithTrackbacks"')
  return NodeWithTrackbacks_possibleTypes.includes(obj.__typename)
}



var PostToCategoryConnection_possibleTypes = ['PostToCategoryConnection']
export var isPostToCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCategoryConnection"')
  return PostToCategoryConnection_possibleTypes.includes(obj.__typename)
}



var PostToCategoryConnectionEdge_possibleTypes = ['PostToCategoryConnectionEdge']
export var isPostToCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCategoryConnectionEdge"')
  return PostToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToCategoryConnectionPageInfo_possibleTypes = ['PostToCategoryConnectionPageInfo']
export var isPostToCategoryConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCategoryConnectionPageInfo"')
  return PostToCategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostToCommentConnection_possibleTypes = ['PostToCommentConnection']
export var isPostToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCommentConnection"')
  return PostToCommentConnection_possibleTypes.includes(obj.__typename)
}



var PostToCommentConnectionEdge_possibleTypes = ['PostToCommentConnectionEdge']
export var isPostToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCommentConnectionEdge"')
  return PostToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToCommentConnectionPageInfo_possibleTypes = ['PostToCommentConnectionPageInfo']
export var isPostToCommentConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCommentConnectionPageInfo"')
  return PostToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostToPostFormatConnection_possibleTypes = ['PostToPostFormatConnection']
export var isPostToPostFormatConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToPostFormatConnection"')
  return PostToPostFormatConnection_possibleTypes.includes(obj.__typename)
}



var PostFormatConnection_possibleTypes = ['PostToPostFormatConnection','RootQueryToPostFormatConnection']
export var isPostFormatConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatConnection"')
  return PostFormatConnection_possibleTypes.includes(obj.__typename)
}



var PostFormatConnectionEdge_possibleTypes = ['PostToPostFormatConnectionEdge','RootQueryToPostFormatConnectionEdge']
export var isPostFormatConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatConnectionEdge"')
  return PostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostFormat_possibleTypes = ['PostFormat']
export var isPostFormat = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormat"')
  return PostFormat_possibleTypes.includes(obj.__typename)
}



var PostFormatToContentNodeConnection_possibleTypes = ['PostFormatToContentNodeConnection']
export var isPostFormatToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToContentNodeConnection"')
  return PostFormatToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var PostFormatToContentNodeConnectionEdge_possibleTypes = ['PostFormatToContentNodeConnectionEdge']
export var isPostFormatToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToContentNodeConnectionEdge"')
  return PostFormatToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostFormatToContentNodeConnectionPageInfo_possibleTypes = ['PostFormatToContentNodeConnectionPageInfo']
export var isPostFormatToContentNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToContentNodeConnectionPageInfo"')
  return PostFormatToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostFormatToPostConnection_possibleTypes = ['PostFormatToPostConnection']
export var isPostFormatToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToPostConnection"')
  return PostFormatToPostConnection_possibleTypes.includes(obj.__typename)
}



var PostFormatToPostConnectionEdge_possibleTypes = ['PostFormatToPostConnectionEdge']
export var isPostFormatToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToPostConnectionEdge"')
  return PostFormatToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostFormatToPostConnectionPageInfo_possibleTypes = ['PostFormatToPostConnectionPageInfo']
export var isPostFormatToPostConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToPostConnectionPageInfo"')
  return PostFormatToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostConnectionPageInfo_possibleTypes = ['PostFormatToPostConnectionPageInfo','PostToRevisionConnectionPageInfo','TagToPostConnectionPageInfo','UserToPostConnectionPageInfo','CategoryToPostConnectionPageInfo','RootQueryToPostConnectionPageInfo']
export var isPostConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostConnectionPageInfo"')
  return PostConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostFormatToTaxonomyConnectionEdge_possibleTypes = ['PostFormatToTaxonomyConnectionEdge']
export var isPostFormatToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToTaxonomyConnectionEdge"')
  return PostFormatToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostFormatConnectionPageInfo_possibleTypes = ['PostToPostFormatConnectionPageInfo','RootQueryToPostFormatConnectionPageInfo']
export var isPostFormatConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatConnectionPageInfo"')
  return PostFormatConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostToPostFormatConnectionEdge_possibleTypes = ['PostToPostFormatConnectionEdge']
export var isPostToPostFormatConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToPostFormatConnectionEdge"')
  return PostToPostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToPostFormatConnectionPageInfo_possibleTypes = ['PostToPostFormatConnectionPageInfo']
export var isPostToPostFormatConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToPostFormatConnectionPageInfo"')
  return PostToPostFormatConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostToPreviewConnectionEdge_possibleTypes = ['PostToPreviewConnectionEdge']
export var isPostToPreviewConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToPreviewConnectionEdge"')
  return PostToPreviewConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToRevisionConnection_possibleTypes = ['PostToRevisionConnection']
export var isPostToRevisionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToRevisionConnection"')
  return PostToRevisionConnection_possibleTypes.includes(obj.__typename)
}



var PostToRevisionConnectionEdge_possibleTypes = ['PostToRevisionConnectionEdge']
export var isPostToRevisionConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToRevisionConnectionEdge"')
  return PostToRevisionConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToRevisionConnectionPageInfo_possibleTypes = ['PostToRevisionConnectionPageInfo']
export var isPostToRevisionConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToRevisionConnectionPageInfo"')
  return PostToRevisionConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostToTagConnection_possibleTypes = ['PostToTagConnection']
export var isPostToTagConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTagConnection"')
  return PostToTagConnection_possibleTypes.includes(obj.__typename)
}



var TagConnection_possibleTypes = ['PostToTagConnection','RootQueryToTagConnection']
export var isTagConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagConnection"')
  return TagConnection_possibleTypes.includes(obj.__typename)
}



var TagConnectionEdge_possibleTypes = ['PostToTagConnectionEdge','RootQueryToTagConnectionEdge']
export var isTagConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagConnectionEdge"')
  return TagConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Tag_possibleTypes = ['Tag']
export var isTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTag"')
  return Tag_possibleTypes.includes(obj.__typename)
}



var TagToContentNodeConnection_possibleTypes = ['TagToContentNodeConnection']
export var isTagToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToContentNodeConnection"')
  return TagToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var TagToContentNodeConnectionEdge_possibleTypes = ['TagToContentNodeConnectionEdge']
export var isTagToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToContentNodeConnectionEdge"')
  return TagToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TagToContentNodeConnectionPageInfo_possibleTypes = ['TagToContentNodeConnectionPageInfo']
export var isTagToContentNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToContentNodeConnectionPageInfo"')
  return TagToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var TagToPostConnection_possibleTypes = ['TagToPostConnection']
export var isTagToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToPostConnection"')
  return TagToPostConnection_possibleTypes.includes(obj.__typename)
}



var TagToPostConnectionEdge_possibleTypes = ['TagToPostConnectionEdge']
export var isTagToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToPostConnectionEdge"')
  return TagToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TagToPostConnectionPageInfo_possibleTypes = ['TagToPostConnectionPageInfo']
export var isTagToPostConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToPostConnectionPageInfo"')
  return TagToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var TagToTaxonomyConnectionEdge_possibleTypes = ['TagToTaxonomyConnectionEdge']
export var isTagToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToTaxonomyConnectionEdge"')
  return TagToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TagConnectionPageInfo_possibleTypes = ['PostToTagConnectionPageInfo','RootQueryToTagConnectionPageInfo']
export var isTagConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagConnectionPageInfo"')
  return TagConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostToTagConnectionEdge_possibleTypes = ['PostToTagConnectionEdge']
export var isPostToTagConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTagConnectionEdge"')
  return PostToTagConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToTagConnectionPageInfo_possibleTypes = ['PostToTagConnectionPageInfo']
export var isPostToTagConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTagConnectionPageInfo"')
  return PostToTagConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostToTermNodeConnection_possibleTypes = ['PostToTermNodeConnection']
export var isPostToTermNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTermNodeConnection"')
  return PostToTermNodeConnection_possibleTypes.includes(obj.__typename)
}



var TermNodeConnection_possibleTypes = ['PostToTermNodeConnection','RootQueryToTermNodeConnection']
export var isTermNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeConnection"')
  return TermNodeConnection_possibleTypes.includes(obj.__typename)
}



var TermNodeConnectionEdge_possibleTypes = ['PostToTermNodeConnectionEdge','RootQueryToTermNodeConnectionEdge']
export var isTermNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeConnectionEdge"')
  return TermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TermNodeConnectionPageInfo_possibleTypes = ['PostToTermNodeConnectionPageInfo','RootQueryToTermNodeConnectionPageInfo']
export var isTermNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeConnectionPageInfo"')
  return TermNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var PostToTermNodeConnectionEdge_possibleTypes = ['PostToTermNodeConnectionEdge']
export var isPostToTermNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTermNodeConnectionEdge"')
  return PostToTermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToTermNodeConnectionPageInfo_possibleTypes = ['PostToTermNodeConnectionPageInfo']
export var isPostToTermNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTermNodeConnectionPageInfo"')
  return PostToTermNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToPostConnectionEdge_possibleTypes = ['UserToPostConnectionEdge']
export var isUserToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPostConnectionEdge"')
  return UserToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToPostConnectionPageInfo_possibleTypes = ['UserToPostConnectionPageInfo']
export var isUserToPostConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPostConnectionPageInfo"')
  return UserToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToRevisionsConnection_possibleTypes = ['UserToRevisionsConnection']
export var isUserToRevisionsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToRevisionsConnection"')
  return UserToRevisionsConnection_possibleTypes.includes(obj.__typename)
}



var UserToRevisionsConnectionEdge_possibleTypes = ['UserToRevisionsConnectionEdge']
export var isUserToRevisionsConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToRevisionsConnectionEdge"')
  return UserToRevisionsConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToRevisionsConnectionPageInfo_possibleTypes = ['UserToRevisionsConnectionPageInfo']
export var isUserToRevisionsConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToRevisionsConnectionPageInfo"')
  return UserToRevisionsConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToUserRoleConnection_possibleTypes = ['UserToUserRoleConnection']
export var isUserToUserRoleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToUserRoleConnection"')
  return UserToUserRoleConnection_possibleTypes.includes(obj.__typename)
}



var UserRoleConnection_possibleTypes = ['UserToUserRoleConnection','RootQueryToUserRoleConnection']
export var isUserRoleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserRoleConnection"')
  return UserRoleConnection_possibleTypes.includes(obj.__typename)
}



var UserRoleConnectionEdge_possibleTypes = ['UserToUserRoleConnectionEdge','RootQueryToUserRoleConnectionEdge']
export var isUserRoleConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserRoleConnectionEdge"')
  return UserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserRole_possibleTypes = ['UserRole']
export var isUserRole = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserRole"')
  return UserRole_possibleTypes.includes(obj.__typename)
}



var UserRoleConnectionPageInfo_possibleTypes = ['UserToUserRoleConnectionPageInfo','RootQueryToUserRoleConnectionPageInfo']
export var isUserRoleConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserRoleConnectionPageInfo"')
  return UserRoleConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var UserToUserRoleConnectionEdge_possibleTypes = ['UserToUserRoleConnectionEdge']
export var isUserToUserRoleConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToUserRoleConnectionEdge"')
  return UserToUserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToUserRoleConnectionPageInfo_possibleTypes = ['UserToUserRoleConnectionPageInfo']
export var isUserToUserRoleConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToUserRoleConnectionPageInfo"')
  return UserToUserRoleConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var CategoryToContentNodeConnectionEdge_possibleTypes = ['CategoryToContentNodeConnectionEdge']
export var isCategoryToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToContentNodeConnectionEdge"')
  return CategoryToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToContentNodeConnectionPageInfo_possibleTypes = ['CategoryToContentNodeConnectionPageInfo']
export var isCategoryToContentNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToContentNodeConnectionPageInfo"')
  return CategoryToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var CategoryToParentCategoryConnectionEdge_possibleTypes = ['CategoryToParentCategoryConnectionEdge']
export var isCategoryToParentCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToParentCategoryConnectionEdge"')
  return CategoryToParentCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToPostConnection_possibleTypes = ['CategoryToPostConnection']
export var isCategoryToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToPostConnection"')
  return CategoryToPostConnection_possibleTypes.includes(obj.__typename)
}



var CategoryToPostConnectionEdge_possibleTypes = ['CategoryToPostConnectionEdge']
export var isCategoryToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToPostConnectionEdge"')
  return CategoryToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToPostConnectionPageInfo_possibleTypes = ['CategoryToPostConnectionPageInfo']
export var isCategoryToPostConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToPostConnectionPageInfo"')
  return CategoryToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var CategoryToTaxonomyConnectionEdge_possibleTypes = ['CategoryToTaxonomyConnectionEdge']
export var isCategoryToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToTaxonomyConnectionEdge"')
  return CategoryToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToCategoryConnectionEdge_possibleTypes = ['RootQueryToCategoryConnectionEdge']
export var isRootQueryToCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCategoryConnectionEdge"')
  return RootQueryToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToCategoryConnectionPageInfo_possibleTypes = ['RootQueryToCategoryConnectionPageInfo']
export var isRootQueryToCategoryConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCategoryConnectionPageInfo"')
  return RootQueryToCategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToCommentConnection_possibleTypes = ['RootQueryToCommentConnection']
export var isRootQueryToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCommentConnection"')
  return RootQueryToCommentConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToCommentConnectionEdge_possibleTypes = ['RootQueryToCommentConnectionEdge']
export var isRootQueryToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCommentConnectionEdge"')
  return RootQueryToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToCommentConnectionPageInfo_possibleTypes = ['RootQueryToCommentConnectionPageInfo']
export var isRootQueryToCommentConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCommentConnectionPageInfo"')
  return RootQueryToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentNodeConnection_possibleTypes = ['RootQueryToContentNodeConnection']
export var isRootQueryToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentNodeConnection"')
  return RootQueryToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentNodeConnectionEdge_possibleTypes = ['RootQueryToContentNodeConnectionEdge']
export var isRootQueryToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentNodeConnectionEdge"')
  return RootQueryToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentNodeConnectionPageInfo_possibleTypes = ['RootQueryToContentNodeConnectionPageInfo']
export var isRootQueryToContentNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentNodeConnectionPageInfo"')
  return RootQueryToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentTypeConnection_possibleTypes = ['RootQueryToContentTypeConnection']
export var isRootQueryToContentTypeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentTypeConnection"')
  return RootQueryToContentTypeConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentTypeConnectionEdge_possibleTypes = ['RootQueryToContentTypeConnectionEdge']
export var isRootQueryToContentTypeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentTypeConnectionEdge"')
  return RootQueryToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentTypeConnectionPageInfo_possibleTypes = ['RootQueryToContentTypeConnectionPageInfo']
export var isRootQueryToContentTypeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentTypeConnectionPageInfo"')
  return RootQueryToContentTypeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var DiscussionSettings_possibleTypes = ['DiscussionSettings']
export var isDiscussionSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDiscussionSettings"')
  return DiscussionSettings_possibleTypes.includes(obj.__typename)
}



var GeneralSettings_possibleTypes = ['GeneralSettings']
export var isGeneralSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGeneralSettings"')
  return GeneralSettings_possibleTypes.includes(obj.__typename)
}



var RootQueryToMediaItemConnection_possibleTypes = ['RootQueryToMediaItemConnection']
export var isRootQueryToMediaItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMediaItemConnection"')
  return RootQueryToMediaItemConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToMediaItemConnectionEdge_possibleTypes = ['RootQueryToMediaItemConnectionEdge']
export var isRootQueryToMediaItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMediaItemConnectionEdge"')
  return RootQueryToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToMediaItemConnectionPageInfo_possibleTypes = ['RootQueryToMediaItemConnectionPageInfo']
export var isRootQueryToMediaItemConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMediaItemConnectionPageInfo"')
  return RootQueryToMediaItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var Menu_possibleTypes = ['Menu']
export var isMenu = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenu"')
  return Menu_possibleTypes.includes(obj.__typename)
}



var MenuToMenuItemConnection_possibleTypes = ['MenuToMenuItemConnection']
export var isMenuToMenuItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuToMenuItemConnection"')
  return MenuToMenuItemConnection_possibleTypes.includes(obj.__typename)
}



var MenuItemConnection_possibleTypes = ['MenuToMenuItemConnection','MenuItemToMenuItemConnection','RootQueryToMenuItemConnection']
export var isMenuItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemConnection"')
  return MenuItemConnection_possibleTypes.includes(obj.__typename)
}



var MenuItemConnectionEdge_possibleTypes = ['MenuItemToMenuItemConnectionEdge','MenuToMenuItemConnectionEdge','RootQueryToMenuItemConnectionEdge']
export var isMenuItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemConnectionEdge"')
  return MenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuItem_possibleTypes = ['MenuItem']
export var isMenuItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItem"')
  return MenuItem_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuItemConnection_possibleTypes = ['MenuItemToMenuItemConnection']
export var isMenuItemToMenuItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemConnection"')
  return MenuItemToMenuItemConnection_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuItemConnectionEdge_possibleTypes = ['MenuItemToMenuItemConnectionEdge']
export var isMenuItemToMenuItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemConnectionEdge"')
  return MenuItemToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuItemConnectionPageInfo_possibleTypes = ['MenuItemToMenuItemConnectionPageInfo']
export var isMenuItemToMenuItemConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemConnectionPageInfo"')
  return MenuItemToMenuItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var MenuItemConnectionPageInfo_possibleTypes = ['MenuItemToMenuItemConnectionPageInfo','MenuToMenuItemConnectionPageInfo','RootQueryToMenuItemConnectionPageInfo']
export var isMenuItemConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemConnectionPageInfo"')
  return MenuItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuItemLinkableConnectionEdge_possibleTypes = ['MenuItemToMenuItemLinkableConnectionEdge']
export var isMenuItemToMenuItemLinkableConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemLinkableConnectionEdge"')
  return MenuItemToMenuItemLinkableConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuItemLinkableConnectionEdge_possibleTypes = ['MenuItemToMenuItemLinkableConnectionEdge']
export var isMenuItemLinkableConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemLinkableConnectionEdge"')
  return MenuItemLinkableConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuItemObjectUnion_possibleTypes = ['Post','Page','Category','Tag']
export var isMenuItemObjectUnion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemObjectUnion"')
  return MenuItemObjectUnion_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuConnectionEdge_possibleTypes = ['MenuItemToMenuConnectionEdge']
export var isMenuItemToMenuConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuConnectionEdge"')
  return MenuItemToMenuConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuConnectionEdge_possibleTypes = ['MenuItemToMenuConnectionEdge','RootQueryToMenuConnectionEdge']
export var isMenuConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuConnectionEdge"')
  return MenuConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuToMenuItemConnectionEdge_possibleTypes = ['MenuToMenuItemConnectionEdge']
export var isMenuToMenuItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuToMenuItemConnectionEdge"')
  return MenuToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuToMenuItemConnectionPageInfo_possibleTypes = ['MenuToMenuItemConnectionPageInfo']
export var isMenuToMenuItemConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuToMenuItemConnectionPageInfo"')
  return MenuToMenuItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuItemConnection_possibleTypes = ['RootQueryToMenuItemConnection']
export var isRootQueryToMenuItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuItemConnection"')
  return RootQueryToMenuItemConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuItemConnectionEdge_possibleTypes = ['RootQueryToMenuItemConnectionEdge']
export var isRootQueryToMenuItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuItemConnectionEdge"')
  return RootQueryToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuItemConnectionPageInfo_possibleTypes = ['RootQueryToMenuItemConnectionPageInfo']
export var isRootQueryToMenuItemConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuItemConnectionPageInfo"')
  return RootQueryToMenuItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuConnection_possibleTypes = ['RootQueryToMenuConnection']
export var isRootQueryToMenuConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuConnection"')
  return RootQueryToMenuConnection_possibleTypes.includes(obj.__typename)
}



var MenuConnection_possibleTypes = ['RootQueryToMenuConnection']
export var isMenuConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuConnection"')
  return MenuConnection_possibleTypes.includes(obj.__typename)
}



var MenuConnectionPageInfo_possibleTypes = ['RootQueryToMenuConnectionPageInfo']
export var isMenuConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuConnectionPageInfo"')
  return MenuConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuConnectionEdge_possibleTypes = ['RootQueryToMenuConnectionEdge']
export var isRootQueryToMenuConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuConnectionEdge"')
  return RootQueryToMenuConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuConnectionPageInfo_possibleTypes = ['RootQueryToMenuConnectionPageInfo']
export var isRootQueryToMenuConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuConnectionPageInfo"')
  return RootQueryToMenuConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToPageConnection_possibleTypes = ['RootQueryToPageConnection']
export var isRootQueryToPageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPageConnection"')
  return RootQueryToPageConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToPageConnectionEdge_possibleTypes = ['RootQueryToPageConnectionEdge']
export var isRootQueryToPageConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPageConnectionEdge"')
  return RootQueryToPageConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToPageConnectionPageInfo_possibleTypes = ['RootQueryToPageConnectionPageInfo']
export var isRootQueryToPageConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPageConnectionPageInfo"')
  return RootQueryToPageConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var Plugin_possibleTypes = ['Plugin']
export var isPlugin = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPlugin"')
  return Plugin_possibleTypes.includes(obj.__typename)
}



var RootQueryToPluginConnection_possibleTypes = ['RootQueryToPluginConnection']
export var isRootQueryToPluginConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPluginConnection"')
  return RootQueryToPluginConnection_possibleTypes.includes(obj.__typename)
}



var PluginConnection_possibleTypes = ['RootQueryToPluginConnection']
export var isPluginConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPluginConnection"')
  return PluginConnection_possibleTypes.includes(obj.__typename)
}



var PluginConnectionEdge_possibleTypes = ['RootQueryToPluginConnectionEdge']
export var isPluginConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPluginConnectionEdge"')
  return PluginConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PluginConnectionPageInfo_possibleTypes = ['RootQueryToPluginConnectionPageInfo']
export var isPluginConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPluginConnectionPageInfo"')
  return PluginConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToPluginConnectionEdge_possibleTypes = ['RootQueryToPluginConnectionEdge']
export var isRootQueryToPluginConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPluginConnectionEdge"')
  return RootQueryToPluginConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToPluginConnectionPageInfo_possibleTypes = ['RootQueryToPluginConnectionPageInfo']
export var isRootQueryToPluginConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPluginConnectionPageInfo"')
  return RootQueryToPluginConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostFormatConnection_possibleTypes = ['RootQueryToPostFormatConnection']
export var isRootQueryToPostFormatConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostFormatConnection"')
  return RootQueryToPostFormatConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostFormatConnectionEdge_possibleTypes = ['RootQueryToPostFormatConnectionEdge']
export var isRootQueryToPostFormatConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostFormatConnectionEdge"')
  return RootQueryToPostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostFormatConnectionPageInfo_possibleTypes = ['RootQueryToPostFormatConnectionPageInfo']
export var isRootQueryToPostFormatConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostFormatConnectionPageInfo"')
  return RootQueryToPostFormatConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostConnection_possibleTypes = ['RootQueryToPostConnection']
export var isRootQueryToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostConnection"')
  return RootQueryToPostConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostConnectionEdge_possibleTypes = ['RootQueryToPostConnectionEdge']
export var isRootQueryToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostConnectionEdge"')
  return RootQueryToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostConnectionPageInfo_possibleTypes = ['RootQueryToPostConnectionPageInfo']
export var isRootQueryToPostConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostConnectionPageInfo"')
  return RootQueryToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var ReadingSettings_possibleTypes = ['ReadingSettings']
export var isReadingSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReadingSettings"')
  return ReadingSettings_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedScriptConnection_possibleTypes = ['RootQueryToEnqueuedScriptConnection']
export var isRootQueryToEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedScriptConnection"')
  return RootQueryToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedScriptConnectionEdge_possibleTypes = ['RootQueryToEnqueuedScriptConnectionEdge']
export var isRootQueryToEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedScriptConnectionEdge"')
  return RootQueryToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedScriptConnectionPageInfo_possibleTypes = ['RootQueryToEnqueuedScriptConnectionPageInfo']
export var isRootQueryToEnqueuedScriptConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedScriptConnectionPageInfo"')
  return RootQueryToEnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedStylesheetConnection_possibleTypes = ['RootQueryToEnqueuedStylesheetConnection']
export var isRootQueryToEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedStylesheetConnection"')
  return RootQueryToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedStylesheetConnectionEdge_possibleTypes = ['RootQueryToEnqueuedStylesheetConnectionEdge']
export var isRootQueryToEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedStylesheetConnectionEdge"')
  return RootQueryToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedStylesheetConnectionPageInfo_possibleTypes = ['RootQueryToEnqueuedStylesheetConnectionPageInfo']
export var isRootQueryToEnqueuedStylesheetConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedStylesheetConnectionPageInfo"')
  return RootQueryToEnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToRevisionsConnection_possibleTypes = ['RootQueryToRevisionsConnection']
export var isRootQueryToRevisionsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToRevisionsConnection"')
  return RootQueryToRevisionsConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToRevisionsConnectionEdge_possibleTypes = ['RootQueryToRevisionsConnectionEdge']
export var isRootQueryToRevisionsConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToRevisionsConnectionEdge"')
  return RootQueryToRevisionsConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToRevisionsConnectionPageInfo_possibleTypes = ['RootQueryToRevisionsConnectionPageInfo']
export var isRootQueryToRevisionsConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToRevisionsConnectionPageInfo"')
  return RootQueryToRevisionsConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToTagConnection_possibleTypes = ['RootQueryToTagConnection']
export var isRootQueryToTagConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTagConnection"')
  return RootQueryToTagConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToTagConnectionEdge_possibleTypes = ['RootQueryToTagConnectionEdge']
export var isRootQueryToTagConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTagConnectionEdge"')
  return RootQueryToTagConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToTagConnectionPageInfo_possibleTypes = ['RootQueryToTagConnectionPageInfo']
export var isRootQueryToTagConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTagConnectionPageInfo"')
  return RootQueryToTagConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToTaxonomyConnection_possibleTypes = ['RootQueryToTaxonomyConnection']
export var isRootQueryToTaxonomyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTaxonomyConnection"')
  return RootQueryToTaxonomyConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToTaxonomyConnectionEdge_possibleTypes = ['RootQueryToTaxonomyConnectionEdge']
export var isRootQueryToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTaxonomyConnectionEdge"')
  return RootQueryToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToTaxonomyConnectionPageInfo_possibleTypes = ['RootQueryToTaxonomyConnectionPageInfo']
export var isRootQueryToTaxonomyConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTaxonomyConnectionPageInfo"')
  return RootQueryToTaxonomyConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToTermNodeConnection_possibleTypes = ['RootQueryToTermNodeConnection']
export var isRootQueryToTermNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTermNodeConnection"')
  return RootQueryToTermNodeConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToTermNodeConnectionEdge_possibleTypes = ['RootQueryToTermNodeConnectionEdge']
export var isRootQueryToTermNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTermNodeConnectionEdge"')
  return RootQueryToTermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToTermNodeConnectionPageInfo_possibleTypes = ['RootQueryToTermNodeConnectionPageInfo']
export var isRootQueryToTermNodeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTermNodeConnectionPageInfo"')
  return RootQueryToTermNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var Theme_possibleTypes = ['Theme']
export var isTheme = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTheme"')
  return Theme_possibleTypes.includes(obj.__typename)
}



var RootQueryToThemeConnection_possibleTypes = ['RootQueryToThemeConnection']
export var isRootQueryToThemeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToThemeConnection"')
  return RootQueryToThemeConnection_possibleTypes.includes(obj.__typename)
}



var ThemeConnection_possibleTypes = ['RootQueryToThemeConnection']
export var isThemeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isThemeConnection"')
  return ThemeConnection_possibleTypes.includes(obj.__typename)
}



var ThemeConnectionEdge_possibleTypes = ['RootQueryToThemeConnectionEdge']
export var isThemeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isThemeConnectionEdge"')
  return ThemeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ThemeConnectionPageInfo_possibleTypes = ['RootQueryToThemeConnectionPageInfo']
export var isThemeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isThemeConnectionPageInfo"')
  return ThemeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToThemeConnectionEdge_possibleTypes = ['RootQueryToThemeConnectionEdge']
export var isRootQueryToThemeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToThemeConnectionEdge"')
  return RootQueryToThemeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToThemeConnectionPageInfo_possibleTypes = ['RootQueryToThemeConnectionPageInfo']
export var isRootQueryToThemeConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToThemeConnectionPageInfo"')
  return RootQueryToThemeConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserRoleConnection_possibleTypes = ['RootQueryToUserRoleConnection']
export var isRootQueryToUserRoleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserRoleConnection"')
  return RootQueryToUserRoleConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserRoleConnectionEdge_possibleTypes = ['RootQueryToUserRoleConnectionEdge']
export var isRootQueryToUserRoleConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserRoleConnectionEdge"')
  return RootQueryToUserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserRoleConnectionPageInfo_possibleTypes = ['RootQueryToUserRoleConnectionPageInfo']
export var isRootQueryToUserRoleConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserRoleConnectionPageInfo"')
  return RootQueryToUserRoleConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserConnection_possibleTypes = ['RootQueryToUserConnection']
export var isRootQueryToUserConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserConnection"')
  return RootQueryToUserConnection_possibleTypes.includes(obj.__typename)
}



var UserConnection_possibleTypes = ['RootQueryToUserConnection']
export var isUserConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserConnection"')
  return UserConnection_possibleTypes.includes(obj.__typename)
}



var UserConnectionPageInfo_possibleTypes = ['RootQueryToUserConnectionPageInfo']
export var isUserConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserConnectionPageInfo"')
  return UserConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserConnectionEdge_possibleTypes = ['RootQueryToUserConnectionEdge']
export var isRootQueryToUserConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserConnectionEdge"')
  return RootQueryToUserConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserConnectionPageInfo_possibleTypes = ['RootQueryToUserConnectionPageInfo']
export var isRootQueryToUserConnectionPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserConnectionPageInfo"')
  return RootQueryToUserConnectionPageInfo_possibleTypes.includes(obj.__typename)
}



var WritingSettings_possibleTypes = ['WritingSettings']
export var isWritingSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWritingSettings"')
  return WritingSettings_possibleTypes.includes(obj.__typename)
}



var RootMutation_possibleTypes = ['RootMutation']
export var isRootMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootMutation"')
  return RootMutation_possibleTypes.includes(obj.__typename)
}



var CreateCategoryPayload_possibleTypes = ['CreateCategoryPayload']
export var isCreateCategoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCategoryPayload"')
  return CreateCategoryPayload_possibleTypes.includes(obj.__typename)
}



var CreateCommentPayload_possibleTypes = ['CreateCommentPayload']
export var isCreateCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCommentPayload"')
  return CreateCommentPayload_possibleTypes.includes(obj.__typename)
}



var CreateMediaItemPayload_possibleTypes = ['CreateMediaItemPayload']
export var isCreateMediaItemPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateMediaItemPayload"')
  return CreateMediaItemPayload_possibleTypes.includes(obj.__typename)
}



var CreatePagePayload_possibleTypes = ['CreatePagePayload']
export var isCreatePagePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePagePayload"')
  return CreatePagePayload_possibleTypes.includes(obj.__typename)
}



var CreatePostPayload_possibleTypes = ['CreatePostPayload']
export var isCreatePostPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePostPayload"')
  return CreatePostPayload_possibleTypes.includes(obj.__typename)
}



var CreatePostFormatPayload_possibleTypes = ['CreatePostFormatPayload']
export var isCreatePostFormatPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePostFormatPayload"')
  return CreatePostFormatPayload_possibleTypes.includes(obj.__typename)
}



var CreateTagPayload_possibleTypes = ['CreateTagPayload']
export var isCreateTagPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateTagPayload"')
  return CreateTagPayload_possibleTypes.includes(obj.__typename)
}



var CreateUserPayload_possibleTypes = ['CreateUserPayload']
export var isCreateUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateUserPayload"')
  return CreateUserPayload_possibleTypes.includes(obj.__typename)
}



var DeleteCategoryPayload_possibleTypes = ['DeleteCategoryPayload']
export var isDeleteCategoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteCategoryPayload"')
  return DeleteCategoryPayload_possibleTypes.includes(obj.__typename)
}



var DeleteCommentPayload_possibleTypes = ['DeleteCommentPayload']
export var isDeleteCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteCommentPayload"')
  return DeleteCommentPayload_possibleTypes.includes(obj.__typename)
}



var DeleteMediaItemPayload_possibleTypes = ['DeleteMediaItemPayload']
export var isDeleteMediaItemPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteMediaItemPayload"')
  return DeleteMediaItemPayload_possibleTypes.includes(obj.__typename)
}



var DeletePagePayload_possibleTypes = ['DeletePagePayload']
export var isDeletePagePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePagePayload"')
  return DeletePagePayload_possibleTypes.includes(obj.__typename)
}



var DeletePostPayload_possibleTypes = ['DeletePostPayload']
export var isDeletePostPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePostPayload"')
  return DeletePostPayload_possibleTypes.includes(obj.__typename)
}



var DeletePostFormatPayload_possibleTypes = ['DeletePostFormatPayload']
export var isDeletePostFormatPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePostFormatPayload"')
  return DeletePostFormatPayload_possibleTypes.includes(obj.__typename)
}



var DeleteTagPayload_possibleTypes = ['DeleteTagPayload']
export var isDeleteTagPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteTagPayload"')
  return DeleteTagPayload_possibleTypes.includes(obj.__typename)
}



var DeleteUserPayload_possibleTypes = ['DeleteUserPayload']
export var isDeleteUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteUserPayload"')
  return DeleteUserPayload_possibleTypes.includes(obj.__typename)
}



var RegisterUserPayload_possibleTypes = ['RegisterUserPayload']
export var isRegisterUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegisterUserPayload"')
  return RegisterUserPayload_possibleTypes.includes(obj.__typename)
}



var ResetUserPasswordPayload_possibleTypes = ['ResetUserPasswordPayload']
export var isResetUserPasswordPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResetUserPasswordPayload"')
  return ResetUserPasswordPayload_possibleTypes.includes(obj.__typename)
}



var RestoreCommentPayload_possibleTypes = ['RestoreCommentPayload']
export var isRestoreCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRestoreCommentPayload"')
  return RestoreCommentPayload_possibleTypes.includes(obj.__typename)
}



var SendPasswordResetEmailPayload_possibleTypes = ['SendPasswordResetEmailPayload']
export var isSendPasswordResetEmailPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSendPasswordResetEmailPayload"')
  return SendPasswordResetEmailPayload_possibleTypes.includes(obj.__typename)
}



var UpdateCategoryPayload_possibleTypes = ['UpdateCategoryPayload']
export var isUpdateCategoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateCategoryPayload"')
  return UpdateCategoryPayload_possibleTypes.includes(obj.__typename)
}



var UpdateCommentPayload_possibleTypes = ['UpdateCommentPayload']
export var isUpdateCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateCommentPayload"')
  return UpdateCommentPayload_possibleTypes.includes(obj.__typename)
}



var UpdateMediaItemPayload_possibleTypes = ['UpdateMediaItemPayload']
export var isUpdateMediaItemPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateMediaItemPayload"')
  return UpdateMediaItemPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePagePayload_possibleTypes = ['UpdatePagePayload']
export var isUpdatePagePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePagePayload"')
  return UpdatePagePayload_possibleTypes.includes(obj.__typename)
}



var UpdatePostPayload_possibleTypes = ['UpdatePostPayload']
export var isUpdatePostPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePostPayload"')
  return UpdatePostPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePostFormatPayload_possibleTypes = ['UpdatePostFormatPayload']
export var isUpdatePostFormatPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePostFormatPayload"')
  return UpdatePostFormatPayload_possibleTypes.includes(obj.__typename)
}



var UpdateSettingsPayload_possibleTypes = ['UpdateSettingsPayload']
export var isUpdateSettingsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateSettingsPayload"')
  return UpdateSettingsPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTagPayload_possibleTypes = ['UpdateTagPayload']
export var isUpdateTagPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTagPayload"')
  return UpdateTagPayload_possibleTypes.includes(obj.__typename)
}



var UpdateUserPayload_possibleTypes = ['UpdateUserPayload']
export var isUpdateUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateUserPayload"')
  return UpdateUserPayload_possibleTypes.includes(obj.__typename)
}



var CommentAuthor_possibleTypes = ['CommentAuthor']
export var isCommentAuthor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentAuthor"')
  return CommentAuthor_possibleTypes.includes(obj.__typename)
}



var DefaultTemplate_possibleTypes = ['DefaultTemplate']
export var isDefaultTemplate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDefaultTemplate"')
  return DefaultTemplate_possibleTypes.includes(obj.__typename)
}



var Template_Blank_possibleTypes = ['Template_Blank']
export var isTemplate_Blank = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTemplate_Blank"')
  return Template_Blank_possibleTypes.includes(obj.__typename)
}



var Template_BlogAlternative_possibleTypes = ['Template_BlogAlternative']
export var isTemplate_BlogAlternative = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTemplate_BlogAlternative"')
  return Template_BlogAlternative_possibleTypes.includes(obj.__typename)
}
