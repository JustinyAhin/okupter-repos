import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  RootQueryRequest,
  RootQueryPromiseChain,
  RootQuery,
  RootMutationRequest,
  RootMutationPromiseChain,
  RootMutation,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends RootQueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<RootQuery, R>>

  mutation<R extends RootMutationRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<RootMutation, R>>

  chain: {
    query: RootQueryPromiseChain

    mutation: RootMutationPromiseChain
  }
}

export type QueryResult<fields extends RootQueryRequest> = FieldsSelection<
  RootQuery,
  fields
>

export declare const generateQueryOp: (
  fields: RootQueryRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<
  fields extends RootMutationRequest
> = FieldsSelection<RootMutation, fields>

export declare const generateMutationOp: (
  fields: RootMutationRequest & { __name?: string },
) => GraphqlOperation

export declare const enumOrderEnum: {
  readonly ASC: 'ASC'
  readonly DESC: 'DESC'
}

export declare const enumTermObjectsConnectionOrderbyEnum: {
  readonly COUNT: 'COUNT'
  readonly DESCRIPTION: 'DESCRIPTION'
  readonly NAME: 'NAME'
  readonly SLUG: 'SLUG'
  readonly TERM_GROUP: 'TERM_GROUP'
  readonly TERM_ID: 'TERM_ID'
  readonly TERM_ORDER: 'TERM_ORDER'
}

export declare const enumContentTypesOfCategoryEnum: {
  readonly POST: 'POST'
}

export declare const enumPostObjectsConnectionDateColumnEnum: {
  readonly DATE: 'DATE'
  readonly MODIFIED: 'MODIFIED'
}

export declare const enumRelationEnum: {
  readonly AND: 'AND'
  readonly OR: 'OR'
}

export declare const enumMimeTypeEnum: {
  readonly APPLICATION_JAVA: 'APPLICATION_JAVA'
  readonly APPLICATION_MSWORD: 'APPLICATION_MSWORD'
  readonly APPLICATION_OCTET_STREAM: 'APPLICATION_OCTET_STREAM'
  readonly APPLICATION_ONENOTE: 'APPLICATION_ONENOTE'
  readonly APPLICATION_OXPS: 'APPLICATION_OXPS'
  readonly APPLICATION_PDF: 'APPLICATION_PDF'
  readonly APPLICATION_RAR: 'APPLICATION_RAR'
  readonly APPLICATION_RTF: 'APPLICATION_RTF'
  readonly APPLICATION_TTAF_XML: 'APPLICATION_TTAF_XML'
  readonly APPLICATION_VND_APPLE_KEYNOTE: 'APPLICATION_VND_APPLE_KEYNOTE'
  readonly APPLICATION_VND_APPLE_NUMBERS: 'APPLICATION_VND_APPLE_NUMBERS'
  readonly APPLICATION_VND_APPLE_PAGES: 'APPLICATION_VND_APPLE_PAGES'
  readonly APPLICATION_VND_MS_ACCESS: 'APPLICATION_VND_MS_ACCESS'
  readonly APPLICATION_VND_MS_EXCEL: 'APPLICATION_VND_MS_EXCEL'
  readonly APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12: 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12'
  readonly APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12: 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12'
  readonly APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12: 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12'
  readonly APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12: 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12'
  readonly APPLICATION_VND_MS_POWERPOINT: 'APPLICATION_VND_MS_POWERPOINT'
  readonly APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12: 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12'
  readonly APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12: 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12'
  readonly APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12: 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12'
  readonly APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12: 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12'
  readonly APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12: 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12'
  readonly APPLICATION_VND_MS_PROJECT: 'APPLICATION_VND_MS_PROJECT'
  readonly APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12: 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12'
  readonly APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12: 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12'
  readonly APPLICATION_VND_MS_WRITE: 'APPLICATION_VND_MS_WRITE'
  readonly APPLICATION_VND_MS_XPSDOCUMENT: 'APPLICATION_VND_MS_XPSDOCUMENT'
  readonly APPLICATION_VND_OASIS_OPENDOCUMENT_CHART: 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART'
  readonly APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE: 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE'
  readonly APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA: 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA'
  readonly APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS: 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS'
  readonly APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION: 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION'
  readonly APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET: 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET'
  readonly APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT: 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT'
  readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION'
  readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE'
  readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW'
  readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE'
  readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET'
  readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE'
  readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT'
  readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE'
  readonly APPLICATION_WORDPERFECT: 'APPLICATION_WORDPERFECT'
  readonly APPLICATION_X_7Z_COMPRESSED: 'APPLICATION_X_7Z_COMPRESSED'
  readonly APPLICATION_X_GZIP: 'APPLICATION_X_GZIP'
  readonly APPLICATION_X_TAR: 'APPLICATION_X_TAR'
  readonly APPLICATION_ZIP: 'APPLICATION_ZIP'
  readonly AUDIO_AAC: 'AUDIO_AAC'
  readonly AUDIO_FLAC: 'AUDIO_FLAC'
  readonly AUDIO_MIDI: 'AUDIO_MIDI'
  readonly AUDIO_MPEG: 'AUDIO_MPEG'
  readonly AUDIO_OGG: 'AUDIO_OGG'
  readonly AUDIO_WAV: 'AUDIO_WAV'
  readonly AUDIO_X_MATROSKA: 'AUDIO_X_MATROSKA'
  readonly AUDIO_X_MS_WAX: 'AUDIO_X_MS_WAX'
  readonly AUDIO_X_MS_WMA: 'AUDIO_X_MS_WMA'
  readonly AUDIO_X_REALAUDIO: 'AUDIO_X_REALAUDIO'
  readonly IMAGE_BMP: 'IMAGE_BMP'
  readonly IMAGE_GIF: 'IMAGE_GIF'
  readonly IMAGE_HEIC: 'IMAGE_HEIC'
  readonly IMAGE_JPEG: 'IMAGE_JPEG'
  readonly IMAGE_PNG: 'IMAGE_PNG'
  readonly IMAGE_TIFF: 'IMAGE_TIFF'
  readonly IMAGE_WEBP: 'IMAGE_WEBP'
  readonly IMAGE_X_ICON: 'IMAGE_X_ICON'
  readonly TEXT_CALENDAR: 'TEXT_CALENDAR'
  readonly TEXT_CSS: 'TEXT_CSS'
  readonly TEXT_CSV: 'TEXT_CSV'
  readonly TEXT_PLAIN: 'TEXT_PLAIN'
  readonly TEXT_RICHTEXT: 'TEXT_RICHTEXT'
  readonly TEXT_TAB_SEPARATED_VALUES: 'TEXT_TAB_SEPARATED_VALUES'
  readonly TEXT_VTT: 'TEXT_VTT'
  readonly VIDEO_3GPP: 'VIDEO_3GPP'
  readonly VIDEO_3GPP2: 'VIDEO_3GPP2'
  readonly VIDEO_AVI: 'VIDEO_AVI'
  readonly VIDEO_DIVX: 'VIDEO_DIVX'
  readonly VIDEO_MP4: 'VIDEO_MP4'
  readonly VIDEO_MPEG: 'VIDEO_MPEG'
  readonly VIDEO_OGG: 'VIDEO_OGG'
  readonly VIDEO_QUICKTIME: 'VIDEO_QUICKTIME'
  readonly VIDEO_WEBM: 'VIDEO_WEBM'
  readonly VIDEO_X_FLV: 'VIDEO_X_FLV'
  readonly VIDEO_X_MATROSKA: 'VIDEO_X_MATROSKA'
  readonly VIDEO_X_MS_ASF: 'VIDEO_X_MS_ASF'
  readonly VIDEO_X_MS_WM: 'VIDEO_X_MS_WM'
  readonly VIDEO_X_MS_WMV: 'VIDEO_X_MS_WMV'
  readonly VIDEO_X_MS_WMX: 'VIDEO_X_MS_WMX'
}

export declare const enumPostObjectsConnectionOrderbyEnum: {
  readonly AUTHOR: 'AUTHOR'
  readonly COMMENT_COUNT: 'COMMENT_COUNT'
  readonly DATE: 'DATE'
  readonly IN: 'IN'
  readonly MENU_ORDER: 'MENU_ORDER'
  readonly MODIFIED: 'MODIFIED'
  readonly NAME_IN: 'NAME_IN'
  readonly PARENT: 'PARENT'
  readonly SLUG: 'SLUG'
  readonly TITLE: 'TITLE'
}

export declare const enumPostStatusEnum: {
  readonly AUTO_DRAFT: 'AUTO_DRAFT'
  readonly DRAFT: 'DRAFT'
  readonly FUTURE: 'FUTURE'
  readonly INHERIT: 'INHERIT'
  readonly PENDING: 'PENDING'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLISH: 'PUBLISH'
  readonly REQUEST_COMPLETED: 'REQUEST_COMPLETED'
  readonly REQUEST_CONFIRMED: 'REQUEST_CONFIRMED'
  readonly REQUEST_FAILED: 'REQUEST_FAILED'
  readonly REQUEST_PENDING: 'REQUEST_PENDING'
  readonly TRASH: 'TRASH'
}

export declare const enumContentTypeEnum: {
  readonly ATTACHMENT: 'ATTACHMENT'
  readonly PAGE: 'PAGE'
  readonly POST: 'POST'
}

export declare const enumAvatarRatingEnum: {
  readonly G: 'G'
  readonly PG: 'PG'
  readonly R: 'R'
  readonly X: 'X'
}

export declare const enumCommentsConnectionOrderbyEnum: {
  readonly COMMENT_AGENT: 'COMMENT_AGENT'
  readonly COMMENT_APPROVED: 'COMMENT_APPROVED'
  readonly COMMENT_AUTHOR: 'COMMENT_AUTHOR'
  readonly COMMENT_AUTHOR_EMAIL: 'COMMENT_AUTHOR_EMAIL'
  readonly COMMENT_AUTHOR_IP: 'COMMENT_AUTHOR_IP'
  readonly COMMENT_AUTHOR_URL: 'COMMENT_AUTHOR_URL'
  readonly COMMENT_CONTENT: 'COMMENT_CONTENT'
  readonly COMMENT_DATE: 'COMMENT_DATE'
  readonly COMMENT_DATE_GMT: 'COMMENT_DATE_GMT'
  readonly COMMENT_ID: 'COMMENT_ID'
  readonly COMMENT_IN: 'COMMENT_IN'
  readonly COMMENT_KARMA: 'COMMENT_KARMA'
  readonly COMMENT_PARENT: 'COMMENT_PARENT'
  readonly COMMENT_POST_ID: 'COMMENT_POST_ID'
  readonly COMMENT_TYPE: 'COMMENT_TYPE'
  readonly USER_ID: 'USER_ID'
}

export declare const enumPostObjectFieldFormatEnum: {
  readonly RAW: 'RAW'
  readonly RENDERED: 'RENDERED'
}

export declare const enumCommentStatusEnum: {
  readonly APPROVE: 'APPROVE'
  readonly HOLD: 'HOLD'
  readonly SPAM: 'SPAM'
  readonly TRASH: 'TRASH'
}

export declare const enumMediaItemSizeEnum: {
  readonly LARGE: 'LARGE'
  readonly MEDIUM: 'MEDIUM'
  readonly MEDIUM_LARGE: 'MEDIUM_LARGE'
  readonly THUMBNAIL: 'THUMBNAIL'
  readonly _1536X1536: '_1536X1536'
  readonly _2048X2048: '_2048X2048'
}

export declare const enumContentTypesOfPostFormatEnum: {
  readonly POST: 'POST'
}

export declare const enumContentTypesOfTagEnum: {
  readonly POST: 'POST'
}

export declare const enumTaxonomyEnum: {
  readonly CATEGORY: 'CATEGORY'
  readonly POSTFORMAT: 'POSTFORMAT'
  readonly TAG: 'TAG'
}

export declare const enumCategoryIdType: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly NAME: 'NAME'
  readonly SLUG: 'SLUG'
  readonly URI: 'URI'
}

export declare const enumCommentNodeIdTypeEnum: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
}

export declare const enumContentNodeIdTypeEnum: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly URI: 'URI'
}

export declare const enumContentTypeIdTypeEnum: {
  readonly ID: 'ID'
  readonly NAME: 'NAME'
}

export declare const enumMediaItemIdType: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly SLUG: 'SLUG'
  readonly SOURCE_URL: 'SOURCE_URL'
  readonly URI: 'URI'
}

export declare const enumMenuNodeIdTypeEnum: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly LOCATION: 'LOCATION'
  readonly NAME: 'NAME'
  readonly SLUG: 'SLUG'
}

export declare const enumMenuLocationEnum: {
  readonly EMPTY: 'EMPTY'
}

export declare const enumMenuItemNodeIdTypeEnum: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
}

export declare const enumPageIdType: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly URI: 'URI'
}

export declare const enumPluginStatusEnum: {
  readonly ACTIVE: 'ACTIVE'
  readonly DROP_IN: 'DROP_IN'
  readonly INACTIVE: 'INACTIVE'
  readonly MUST_USE: 'MUST_USE'
  readonly PAUSED: 'PAUSED'
  readonly RECENTLY_ACTIVE: 'RECENTLY_ACTIVE'
  readonly UPGRADE: 'UPGRADE'
}

export declare const enumPostIdType: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly SLUG: 'SLUG'
  readonly URI: 'URI'
}

export declare const enumPostFormatIdType: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly NAME: 'NAME'
  readonly SLUG: 'SLUG'
  readonly URI: 'URI'
}

export declare const enumTagIdType: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly NAME: 'NAME'
  readonly SLUG: 'SLUG'
  readonly URI: 'URI'
}

export declare const enumTaxonomyIdTypeEnum: {
  readonly ID: 'ID'
  readonly NAME: 'NAME'
}

export declare const enumTermNodeIdTypeEnum: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly ID: 'ID'
  readonly NAME: 'NAME'
  readonly SLUG: 'SLUG'
  readonly URI: 'URI'
}

export declare const enumUserNodeIdTypeEnum: {
  readonly DATABASE_ID: 'DATABASE_ID'
  readonly EMAIL: 'EMAIL'
  readonly ID: 'ID'
  readonly SLUG: 'SLUG'
  readonly URI: 'URI'
  readonly USERNAME: 'USERNAME'
}

export declare const enumUsersConnectionOrderbyEnum: {
  readonly DISPLAY_NAME: 'DISPLAY_NAME'
  readonly EMAIL: 'EMAIL'
  readonly LOGIN: 'LOGIN'
  readonly LOGIN_IN: 'LOGIN_IN'
  readonly NICE_NAME: 'NICE_NAME'
  readonly NICE_NAME_IN: 'NICE_NAME_IN'
  readonly REGISTERED: 'REGISTERED'
  readonly URL: 'URL'
}

export declare const enumUserRoleEnum: {
  readonly ADMINISTRATOR: 'ADMINISTRATOR'
  readonly AUTHOR: 'AUTHOR'
  readonly CONTRIBUTOR: 'CONTRIBUTOR'
  readonly EDITOR: 'EDITOR'
  readonly SUBSCRIBER: 'SUBSCRIBER'
}

export declare const enumUsersConnectionSearchColumnEnum: {
  readonly EMAIL: 'EMAIL'
  readonly ID: 'ID'
  readonly LOGIN: 'LOGIN'
  readonly NICENAME: 'NICENAME'
  readonly URL: 'URL'
}

export declare const enumMediaItemStatusEnum: {
  readonly AUTO_DRAFT: 'AUTO_DRAFT'
  readonly INHERIT: 'INHERIT'
  readonly PRIVATE: 'PRIVATE'
  readonly TRASH: 'TRASH'
}
