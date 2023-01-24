export { PhotoSwipeLightbox as default };
export type Point = any;
export type Falsy = undefined | null | false | '' | 0;
export type HTMLElementTagName = keyof HTMLElementTagNameMap;
export type PhotoSwipeOptions = any;
export type PhotoSwipe = any;
export type SlideData = any;
export type LoadState = {
    IDLE: "idle";
    LOADING: "loading";
    LOADED: "loaded";
    ERROR: "error";
}[keyof {
    IDLE: "idle";
    LOADING: "loading";
    LOADED: "loaded";
    ERROR: "error";
}];
export type PhotoSwipeLightbox = any;
export type DataSource = any;
export type UIElementData = any;
export type ContentDefault = any;
export type Slide = any;
export type ZoomLevel = any;
export type Bounds = any;
/**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 */
export type Content = ContentDefault & Record<string, any>;
/**
 * https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 */
export type PhotoSwipeEventsMap = {
    uiRegister: undefined;
    /**
     * https://photoswipe.com/events/#initialization-events
     */
    uiElementCreate: {
        data: UIElementData;
    };
    beforeOpen: undefined;
    firstUpdate: undefined;
    initialLayout: undefined;
    change: undefined;
    afterInit: undefined;
    /**
     * https://photoswipe.com/events/#opening-or-closing-transition-events
     */
    bindEvents: undefined;
    openingAnimationStart: undefined;
    openingAnimationEnd: undefined;
    closingAnimationStart: undefined;
    /**
     * https://photoswipe.com/events/#closing-events
     */
    closingAnimationEnd: undefined;
    close: undefined;
    /**
     * https://photoswipe.com/events/#pointer-and-gesture-events
     */
    destroy: undefined;
    pointerDown: {
        originalEvent: PointerEvent;
    };
    pointerMove: {
        originalEvent: PointerEvent;
    };
    pointerUp: {
        originalEvent: PointerEvent;
    };
    /**
     * can be default prevented
     */
    pinchClose: {
        bgOpacity: number;
    };
    /**
     * can be default prevented
     *
     *
     * https://photoswipe.com/events/#slide-content-events
     */
    verticalDrag: {
        panY: number;
    };
    contentInit: {
        content: Content;
    };
    /**
     * can be default prevented
     */
    contentLoad: {
        content: Content;
        isLazy: boolean;
    };
    /**
     * can be default prevented
     */
    contentLoadImage: {
        content: Content;
        isLazy: boolean;
    };
    loadComplete: {
        content: Content;
        slide: Slide;
        isError?: boolean;
    };
    loadError: {
        content: Content;
        slide: Slide;
    };
    /**
     * can be default prevented
     */
    contentResize: {
        content: Content;
        width: number;
        height: number;
    };
    imageSizeChange: {
        content: Content;
        width: number;
        height: number;
        slide: Slide;
    };
    /**
     * can be default prevented
     */
    contentLazyLoad: {
        content: Content;
    };
    /**
     * can be default prevented
     */
    contentAppend: {
        content: Content;
    };
    /**
     * can be default prevented
     */
    contentActivate: {
        content: Content;
    };
    /**
     * can be default prevented
     */
    contentDeactivate: {
        content: Content;
    };
    /**
     * can be default prevented
     */
    contentRemove: {
        content: Content;
    };
    /**
     * can be default prevented
     *
     *
     * undocumented
     */
    contentDestroy: {
        content: Content;
    };
    /**
     * can be default prevented
     */
    imageClickAction: {
        point: Point;
        originalEvent: PointerEvent;
    };
    /**
     * can be default prevented
     */
    bgClickAction: {
        point: Point;
        originalEvent: PointerEvent;
    };
    /**
     * can be default prevented
     */
    tapAction: {
        point: Point;
        originalEvent: PointerEvent;
    };
    /**
     * can be default prevented
     */
    doubleTapAction: {
        point: Point;
        originalEvent: PointerEvent;
    };
    /**
     * can be default prevented
     */
    keydown: {
        originalEvent: KeyboardEvent;
    };
    moveMainScroll: {
        x: number;
        dragging: boolean;
    };
    firstZoomPan: {
        slide: Slide;
    };
    gettingData: {
        slide: Slide;
        data: SlideData;
        index: number;
    };
    beforeResize: undefined;
    resize: undefined;
    viewportSize: undefined;
    updateScrollOffset: undefined;
    slideInit: {
        slide: Slide;
    };
    afterSetContent: {
        slide: Slide;
    };
    slideLoad: {
        slide: Slide;
    };
    /**
     * can be default prevented
     */
    appendHeavy: {
        slide: Slide;
    };
    appendHeavyContent: {
        slide: Slide;
    };
    slideActivate: {
        slide: Slide;
    };
    slideDeactivate: {
        slide: Slide;
    };
    slideDestroy: {
        slide: Slide;
    };
    beforeZoomTo: {
        destZoomLevel: number;
        centerPoint: Point;
        transitionDuration: number | false;
    };
    zoomPanUpdate: {
        slide: Slide;
    };
    initialZoomPan: {
        slide: Slide;
    };
    calcSlideSize: {
        slide: Slide;
    };
    resolutionChanged: undefined;
    /**
     * can be default prevented
     */
    wheel: {
        originalEvent: WheelEvent;
    };
    /**
     * can be default prevented
     */
    contentAppendImage: {
        content: Content;
    };
    /**
     * can be default prevented
     */
    lazyLoadSlide: {
        index: number;
        itemData: SlideData;
    };
    lazyLoad: undefined;
    calcBounds: {
        slide: Slide;
    };
    /**
     * legacy
     */
    zoomLevelsUpdate: {
        zoomLevels: ZoomLevel;
        slideData: SlideData;
    };
    init: undefined;
    initialZoomIn: undefined;
    initialZoomOut: undefined;
    initialZoomInEnd: undefined;
    initialZoomOutEnd: undefined;
    numItems: {
        dataSource: DataSource;
        numItems: number;
    };
    itemData: {
        itemData: SlideData;
        index: number;
    };
    thumbBounds: {
        index: number;
        itemData: SlideData;
        instance: PhotoSwipe;
    };
};
/**
 * https://photoswipe.com/filters/
 */
export type PhotoSwipeFiltersMap = {
    /**
     * Modify the total amount of slides. Example on Data sources page.
     * https://photoswipe.com/filters/#numitems
     */
    numItems: (numItems: number, dataSource: any) => number;
    /**
     * Modify slide item data. Example on Data sources page.
     * https://photoswipe.com/filters/#itemdata
     */
    itemData: (itemData: any, index: number) => any;
    /**
     * Modify item data when it's parsed from DOM element. Example on Data sources page.
     * https://photoswipe.com/filters/#domitemdata
     */
    domItemData: (itemData: any, element: HTMLElement, linkEl: HTMLAnchorElement) => any;
    /**
     * Modify clicked gallery item index.
     * https://photoswipe.com/filters/#clickedindex
     */
    clickedIndex: (clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number;
    /**
     * Modify placeholder image source.
     * https://photoswipe.com/filters/#placeholdersrc
     */
    placeholderSrc: (placeholderSrc: string | false, content: Content) => string | false;
    /**
     * Modify if the content is currently loading.
     * https://photoswipe.com/filters/#iscontentloading
     */
    isContentLoading: (isContentLoading: boolean, content: Content) => boolean;
    /**
     * Modify if the content can be zoomed.
     * https://photoswipe.com/filters/#iscontentzoomable
     */
    isContentZoomable: (isContentZoomable: boolean, content: Content) => boolean;
    /**
     * Modify if the placeholder should be used for the content.
     * https://photoswipe.com/filters/#usecontentplaceholder
     */
    useContentPlaceholder: (useContentPlaceholder: boolean, content: Content) => boolean;
    /**
     * Modify if the placeholder should be kept after the content is loaded.
     * https://photoswipe.com/filters/#iskeepingplaceholder
     */
    isKeepingPlaceholder: (isKeepingPlaceholder: boolean, content: Content) => boolean;
    /**
     * Modify an element when the content has error state (for example, if image cannot be loaded).
     * https://photoswipe.com/filters/#contenterrorelement
     */
    contentErrorElement: (contentErrorElement: HTMLElement, content: Content) => HTMLElement;
    /**
     * Modify a UI element that's being created.
     * https://photoswipe.com/filters/#uielement
     */
    uiElement: (element: HTMLElement, data: any) => HTMLElement;
    /**
     * Modify the thubmnail element from which opening zoom animation starts or ends.
     * https://photoswipe.com/filters/#thumbel
     */
    thumbEl: (thumbnail: HTMLElement, itemData: any, index: number) => HTMLElement;
    /**
     * Modify the thubmnail bounds from which opening zoom animation starts or ends.
     * https://photoswipe.com/filters/#thumbbounds
     */
    thumbBounds: (thumbBounds: any, itemData: any, index: number) => any;
    srcsetSizesWidth: (srcsetSizesWidth: number, content: Content) => number;
};
/**
 * <T>
 */
export type Filter<T extends keyof PhotoSwipeFiltersMap> = {
    fn: PhotoSwipeFiltersMap[T];
    priority: number;
};
export type AugmentedEvent<T extends keyof PhotoSwipeEventsMap> = PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T];
/**
 * <T>
 */
export type EventCallback<T extends keyof PhotoSwipeEventsMap> = (event: AugmentedEvent<T>) => void;
export type ZoomLevelOption = number | "fit" | "fill" | ((zoomLevelObject: ZoomLevel) => number);
/**
 * <T>
 */
export type Type<T> = any;
/**
 * @template T
 * @typedef {import('../types.js').Type<T>} Type<T>
 */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../slide/content.js').default} Content */
/** @typedef {import('../core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */
/** @typedef {import('../core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */
/**
 * @template T
 * @typedef {import('../core/eventable.js').EventCallback<T>} EventCallback<T>
 */
/**
 * PhotoSwipe Lightbox
 *
 * - If user has unsupported browser it falls back to default browser action (just opens URL)
 * - Binds click event to links that should open PhotoSwipe
 * - parses DOM strcture for PhotoSwipe (retrieves large image URLs and sizes)
 * - Initializes PhotoSwipe
 *
 *
 * Loader options use the same object as PhotoSwipe, and supports such options:
 *
 * gallery - Element | Element[] | NodeList | string selector for the gallery element
 * children - Element | Element[] | NodeList | string selector for the gallery children
 *
 */
declare class PhotoSwipeLightbox extends PhotoSwipeBase {
    /**
     * @param {PhotoSwipeOptions} options
     */
    constructor(options: any);
    _uid: number;
    /**
     * Initialize lightbox, should be called only once.
     * It's not included in the main constructor, so you may bind events before it.
     */
    init(): void;
    /**
     * @param {MouseEvent} e
     */
    onThumbnailsClick(e: MouseEvent): void;
    /**
     * Get index of gallery item that was clicked.
     *
     * @param {MouseEvent} e click event
     */
    getClickedIndex(e: MouseEvent): any;
    /**
     * Load and open PhotoSwipe
     *
     * @param {number} index
     * @param {DataSource=} dataSource
     * @param {{ x?: number; y?: number }} [initialPoint]
     */
    loadAndOpen(index: number, dataSource?: DataSource | undefined, initialPoint?: {
        x?: number | undefined;
        y?: number | undefined;
    } | undefined): boolean;
    shouldOpen: boolean | undefined;
    /**
     * Load the main module and the slide content by index
     *
     * @param {number} index
     * @param {DataSource=} dataSource
     */
    preload(index: number, dataSource?: DataSource | undefined): void;
    _preloadedContent: any;
    /**
     * @private
     * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
     * @param {number} uid
     */
    private _openPhotoswipe;
    /**
     * Unbinds all events, closes PhotoSwipe if it's open.
     */
    destroy(): void;
}
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../util/util.js').LoadState} LoadState */
declare class Content {
    /**
     * @param {SlideData} itemData Slide data
     * @param {PhotoSwipe} instance PhotoSwipe or PhotoSwipeLightbox instance
     * @param {number} index
     */
    constructor(itemData: any, instance: any, index: number);
    instance: any;
    data: any;
    index: number;
    /** @type {HTMLImageElement | HTMLDivElement} */
    element: HTMLImageElement | HTMLDivElement;
    displayedImageWidth: number;
    displayedImageHeight: number;
    width: number;
    height: number;
    isAttached: boolean;
    hasSlide: boolean;
    /** @type {LoadState} */
    state: LoadState;
    type: any;
    removePlaceholder(): void;
    placeholder: Placeholder | null | undefined;
    /**
     * Preload content
     *
     * @param {boolean=} isLazy
     * @param {boolean=} reload
     */
    load(isLazy?: boolean | undefined, reload?: boolean | undefined): void;
    /**
     * Preload image
     *
     * @param {boolean} isLazy
     */
    loadImage(isLazy: boolean): void;
    /**
     * Assign slide to content
     *
     * @param {Slide} slide
     */
    setSlide(slide: any): void;
    slide: any;
    /**
     * Content load success handler
     */
    onLoaded(): void;
    /**
     * Content load error handler
     */
    onError(): void;
    /**
     * @returns {Boolean} If the content is currently loading
     */
    isLoading(): boolean;
    isError(): boolean;
    /**
     * @returns {boolean} If the content is image
     */
    isImageContent(): boolean;
    /**
     * Update content size
     *
     * @param {Number} width
     * @param {Number} height
     */
    setDisplayedSize(width: number, height: number): void;
    /**
     * @returns {boolean} If the content can be zoomed
     */
    isZoomable(): boolean;
    /**
     * Update image srcset sizes attribute based on width and height
     */
    updateSrcsetSizes(): void;
    /**
     * @returns {boolean} If content should use a placeholder (from msrc by default)
     */
    usePlaceholder(): boolean;
    /**
     * Preload content with lazy-loading param
     */
    lazyLoad(): void;
    /**
     * @returns {boolean} If placeholder should be kept after content is loaded
     */
    keepPlaceholder(): boolean;
    /**
     * Destroy the content
     */
    destroy(): void;
    /**
     * Display error message
     */
    displayError(): void;
    /**
     * Append the content
     */
    append(): void;
    isDecoding: boolean | undefined;
    /**
     * Activate the slide,
     * active slide is generally the current one,
     * meaning the user can see it.
     */
    activate(): void;
    /**
     * Deactivate the content
     */
    deactivate(): void;
    /**
     * Remove the content from DOM
     */
    remove(): void;
    /**
     * Append the image content to slide container
     */
    appendImage(): void;
}
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/** @typedef {'fit' | 'fill' | number | ((zoomLevelObject: ZoomLevel) => number)} ZoomLevelOption */
/**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */
declare class ZoomLevel {
    /**
     * @param {PhotoSwipeOptions} options PhotoSwipe options
     * @param {SlideData} itemData Slide data
     * @param {number} index Slide index
     * @param {PhotoSwipe=} pswp PhotoSwipe instance, can be undefined if not initialized yet
     */
    constructor(options: any, itemData: any, index: number, pswp?: PhotoSwipe | undefined);
    pswp: any;
    options: any;
    itemData: any;
    index: number;
    /**
     * Calculate initial, secondary and maximum zoom level for the specified slide.
     *
     * It should be called when either image or viewport size changes.
     *
     * @param {number} maxWidth
     * @param {number} maxHeight
     * @param {{ x?: number; y?: number }} panAreaSize
     */
    update(maxWidth: number, maxHeight: number, panAreaSize: {
        x?: number;
        y?: number;
    }): void;
    elementSize: {
        x: number;
        y: number;
    } | undefined;
    panAreaSize: {
        x?: number | undefined;
        y?: number | undefined;
    } | undefined;
    fit: number | undefined;
    fill: number | undefined;
    vFill: number | undefined;
    initial: number | undefined;
    secondary: number | undefined;
    max: number | undefined;
    min: number | undefined;
    /**
     * Parses user-defined zoom option.
     *
     * @private
     * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
     */
    private _parseZoomLevelOption;
    /**
     * Get zoom level to which image will be zoomed after double-tap gesture,
     * or when user clicks on zoom icon,
     * or mouse-click on image itself.
     * If you return 1 image will be zoomed to its original size.
     *
     * @private
     * @return {number}
     */
    private _getSecondary;
    /**
     * Get initial image zoom level.
     *
     * @private
     * @return {number}
     */
    private _getInitial;
    /**
     * Maximum zoom level when user zooms
     * via zoom/pinch gesture,
     * via cmd/ctrl-wheel or via trackpad.
     *
     * @private
     * @return {number}
     */
    private _getMax;
}
/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../ui/ui-element.js').UIElementData} UIElementData */
/** @typedef {import('../slide/content.js').default} ContentDefault */
/** @typedef {import('../slide/slide.js').default} Slide */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/** @typedef {import('../slide/zoom-level.js').default} ZoomLevel */
/** @typedef {import('../slide/get-thumb-bounds.js').Bounds} Bounds */
/**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 * @typedef {ContentDefault & Record<string, any>} Content
 */
/** @typedef {{ x?: number; y?: number }} Point */
/**
 * @typedef {Object} PhotoSwipeEventsMap https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 *
 * @prop {undefined} uiRegister
 * @prop {{ data: UIElementData }} uiElementCreate
 *
 *
 * https://photoswipe.com/events/#initialization-events
 *
 * @prop {undefined} beforeOpen
 * @prop {undefined} firstUpdate
 * @prop {undefined} initialLayout
 * @prop {undefined} change
 * @prop {undefined} afterInit
 * @prop {undefined} bindEvents
 *
 *
 * https://photoswipe.com/events/#opening-or-closing-transition-events
 *
 * @prop {undefined} openingAnimationStart
 * @prop {undefined} openingAnimationEnd
 * @prop {undefined} closingAnimationStart
 * @prop {undefined} closingAnimationEnd
 *
 *
 * https://photoswipe.com/events/#closing-events
 *
 * @prop {undefined} close
 * @prop {undefined} destroy
 *
 *
 * https://photoswipe.com/events/#pointer-and-gesture-events
 *
 * @prop {{ originalEvent: PointerEvent }} pointerDown
 * @prop {{ originalEvent: PointerEvent }} pointerMove
 * @prop {{ originalEvent: PointerEvent }} pointerUp
 * @prop {{ bgOpacity: number }} pinchClose can be default prevented
 * @prop {{ panY: number }} verticalDrag can be default prevented
 *
 *
 * https://photoswipe.com/events/#slide-content-events
 *
 * @prop {{ content: Content }} contentInit
 * @prop {{ content: Content; isLazy: boolean }} contentLoad can be default prevented
 * @prop {{ content: Content; isLazy: boolean }} contentLoadImage can be default prevented
 * @prop {{ content: Content; slide: Slide; isError?: boolean }} loadComplete
 * @prop {{ content: Content; slide: Slide }} loadError
 * @prop {{ content: Content; width: number; height: number }} contentResize can be default prevented
 * @prop {{ content: Content; width: number; height: number; slide: Slide }} imageSizeChange
 * @prop {{ content: Content }} contentLazyLoad can be default prevented
 * @prop {{ content: Content }} contentAppend can be default prevented
 * @prop {{ content: Content }} contentActivate can be default prevented
 * @prop {{ content: Content }} contentDeactivate can be default prevented
 * @prop {{ content: Content }} contentRemove can be default prevented
 * @prop {{ content: Content }} contentDestroy can be default prevented
 *
 *
 * undocumented
 *
 * @prop {{ point: Point; originalEvent: PointerEvent }} imageClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} bgClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} tapAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} doubleTapAction can be default prevented
 *
 * @prop {{ originalEvent: KeyboardEvent }} keydown can be default prevented
 * @prop {{ x: number; dragging: boolean }} moveMainScroll
 * @prop {{ slide: Slide }} firstZoomPan
 * @prop {{ slide: Slide, data: SlideData, index: number }} gettingData
 * @prop {undefined} beforeResize
 * @prop {undefined} resize
 * @prop {undefined} viewportSize
 * @prop {undefined} updateScrollOffset
 * @prop {{ slide: Slide }} slideInit
 * @prop {{ slide: Slide }} afterSetContent
 * @prop {{ slide: Slide }} slideLoad
 * @prop {{ slide: Slide }} appendHeavy can be default prevented
 * @prop {{ slide: Slide }} appendHeavyContent
 * @prop {{ slide: Slide }} slideActivate
 * @prop {{ slide: Slide }} slideDeactivate
 * @prop {{ slide: Slide }} slideDestroy
 * @prop {{ destZoomLevel: number, centerPoint: Point, transitionDuration: number | false }} beforeZoomTo
 * @prop {{ slide: Slide }} zoomPanUpdate
 * @prop {{ slide: Slide }} initialZoomPan
 * @prop {{ slide: Slide }} calcSlideSize
 * @prop {undefined} resolutionChanged
 * @prop {{ originalEvent: WheelEvent }} wheel can be default prevented
 * @prop {{ content: Content }} contentAppendImage can be default prevented
 * @prop {{ index: number; itemData: SlideData }} lazyLoadSlide can be default prevented
 * @prop {undefined} lazyLoad
 * @prop {{ slide: Slide }} calcBounds
 * @prop {{ zoomLevels: ZoomLevel, slideData: SlideData }} zoomLevelsUpdate
 *
 *
 * legacy
 *
 * @prop {undefined} init
 * @prop {undefined} initialZoomIn
 * @prop {undefined} initialZoomOut
 * @prop {undefined} initialZoomInEnd
 * @prop {undefined} initialZoomOutEnd
 * @prop {{ dataSource: DataSource, numItems: number }} numItems
 * @prop {{ itemData: SlideData; index: number }} itemData
 * @prop {{ index: number, itemData: SlideData, instance: PhotoSwipe }} thumbBounds
 */
/**
 * @typedef {Object} PhotoSwipeFiltersMap https://photoswipe.com/filters/
 *
 * @prop {(numItems: number, dataSource: DataSource) => number} numItems
 * Modify the total amount of slides. Example on Data sources page.
 * https://photoswipe.com/filters/#numitems
 *
 * @prop {(itemData: SlideData, index: number) => SlideData} itemData
 * Modify slide item data. Example on Data sources page.
 * https://photoswipe.com/filters/#itemdata
 *
 * @prop {(itemData: SlideData, element: HTMLElement, linkEl: HTMLAnchorElement) => SlideData} domItemData
 * Modify item data when it's parsed from DOM element. Example on Data sources page.
 * https://photoswipe.com/filters/#domitemdata
 *
 * @prop {(clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number} clickedIndex
 * Modify clicked gallery item index.
 * https://photoswipe.com/filters/#clickedindex
 *
 * @prop {(placeholderSrc: string | false, content: Content) => string | false} placeholderSrc
 * Modify placeholder image source.
 * https://photoswipe.com/filters/#placeholdersrc
 *
 * @prop {(isContentLoading: boolean, content: Content) => boolean} isContentLoading
 * Modify if the content is currently loading.
 * https://photoswipe.com/filters/#iscontentloading
 *
 * @prop {(isContentZoomable: boolean, content: Content) => boolean} isContentZoomable
 * Modify if the content can be zoomed.
 * https://photoswipe.com/filters/#iscontentzoomable
 *
 * @prop {(useContentPlaceholder: boolean, content: Content) => boolean} useContentPlaceholder
 * Modify if the placeholder should be used for the content.
 * https://photoswipe.com/filters/#usecontentplaceholder
 *
 * @prop {(isKeepingPlaceholder: boolean, content: Content) => boolean} isKeepingPlaceholder
 * Modify if the placeholder should be kept after the content is loaded.
 * https://photoswipe.com/filters/#iskeepingplaceholder
 *
 *
 * @prop {(contentErrorElement: HTMLElement, content: Content) => HTMLElement} contentErrorElement
 * Modify an element when the content has error state (for example, if image cannot be loaded).
 * https://photoswipe.com/filters/#contenterrorelement
 *
 * @prop {(element: HTMLElement, data: UIElementData) => HTMLElement} uiElement
 * Modify a UI element that's being created.
 * https://photoswipe.com/filters/#uielement
 *
 * @prop {(thumbnail: HTMLElement, itemData: SlideData, index: number) => HTMLElement} thumbEl
 * Modify the thubmnail element from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbel
 *
 * @prop {(thumbBounds: Bounds, itemData: SlideData, index: number) => Bounds} thumbBounds
 * Modify the thubmnail bounds from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbbounds
 *
 * @prop {(srcsetSizesWidth: number, content: Content) => number} srcsetSizesWidth
 *
 */
/**
 * @template {keyof PhotoSwipeFiltersMap} T
 * @typedef {{ fn: PhotoSwipeFiltersMap[T], priority: number }} Filter<T>
 */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T]} AugmentedEvent
 */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {(event: AugmentedEvent<T>) => void} EventCallback<T>
 */
/**
 * Base PhotoSwipe event object
 *
 * @template {keyof PhotoSwipeEventsMap} T
 */
declare class PhotoSwipeEvent<T extends keyof PhotoSwipeEventsMap> {
    /**
     * @param {T} type
     * @param {PhotoSwipeEventsMap[T]} [details]
     */
    constructor(type: T, details?: PhotoSwipeEventsMap[T] | undefined);
    type: T;
    preventDefault(): void;
    defaultPrevented: boolean | undefined;
}
/** @typedef {import("../photoswipe.js").default} PhotoSwipe */
/** @typedef {import("../photoswipe.js").PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import("../slide/slide.js").SlideData} SlideData */
/**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */
declare class PhotoSwipeBase extends Eventable {
    /**
     * Get total number of slides
     *
     * @returns {number}
     */
    getNumItems(): number;
    /**
     * @param {SlideData} slideData
     * @param {number} index
     */
    createContentFromData(slideData: any, index: number): Content;
    /**
     * Get item data by index.
     *
     * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
     * For example, it may contain properties like
     * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
     *
     * @param {number} index
     */
    getItemData(index: number): any;
    /**
     * Get array of gallery DOM elements,
     * based on childSelector and gallery element.
     *
     * @param {HTMLElement} galleryElement
     */
    _getGalleryDOMElements(galleryElement: HTMLElement): HTMLElement[];
    /**
     * Converts DOM element to item data object.
     *
     * @param {HTMLElement} element DOM element
     */
    _domElementToItemData(element: HTMLElement): any;
    /**
     * Lazy-load by slide data
     *
     * @param {SlideData} itemData Data about the slide
     * @param {number} index
     * @returns Image that is being decoded or false.
     */
    lazyLoadData(itemData: any, index: number): any;
}
declare class Placeholder {
    /**
     * @param {string | false} imageSrc
     * @param {HTMLElement} container
     */
    constructor(imageSrc: string | false, container: HTMLElement);
    element: HTMLDivElement | HTMLImageElement;
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width: number, height: number): void;
    destroy(): void;
}
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */
declare class Eventable {
    /**
     * @type {{ [T in keyof PhotoSwipeEventsMap]?: ((event: AugmentedEvent<T>) => void)[] }}
     */
    _listeners: {
        uiRegister?: ((event: PhotoSwipeEvent<"uiRegister">) => void)[] | undefined;
        /**
         * https://photoswipe.com/events/#initialization-events
         */
        uiElementCreate?: ((event: PhotoSwipeEvent<"uiElementCreate"> & {
            data: any;
        }) => void)[] | undefined;
        beforeOpen?: ((event: PhotoSwipeEvent<"beforeOpen">) => void)[] | undefined;
        firstUpdate?: ((event: PhotoSwipeEvent<"firstUpdate">) => void)[] | undefined;
        initialLayout?: ((event: PhotoSwipeEvent<"initialLayout">) => void)[] | undefined;
        change?: ((event: PhotoSwipeEvent<"change">) => void)[] | undefined;
        afterInit?: ((event: PhotoSwipeEvent<"afterInit">) => void)[] | undefined;
        /**
         * https://photoswipe.com/events/#opening-or-closing-transition-events
         */
        bindEvents?: ((event: PhotoSwipeEvent<"bindEvents">) => void)[] | undefined;
        openingAnimationStart?: ((event: PhotoSwipeEvent<"openingAnimationStart">) => void)[] | undefined;
        openingAnimationEnd?: ((event: PhotoSwipeEvent<"openingAnimationEnd">) => void)[] | undefined;
        closingAnimationStart?: ((event: PhotoSwipeEvent<"closingAnimationStart">) => void)[] | undefined;
        /**
         * https://photoswipe.com/events/#closing-events
         */
        closingAnimationEnd?: ((event: PhotoSwipeEvent<"closingAnimationEnd">) => void)[] | undefined;
        close?: ((event: PhotoSwipeEvent<"close">) => void)[] | undefined;
        /**
         * https://photoswipe.com/events/#pointer-and-gesture-events
         */
        destroy?: ((event: PhotoSwipeEvent<"destroy">) => void)[] | undefined;
        pointerDown?: ((event: PhotoSwipeEvent<"pointerDown"> & {
            originalEvent: PointerEvent;
        }) => void)[] | undefined;
        pointerMove?: ((event: PhotoSwipeEvent<"pointerMove"> & {
            originalEvent: PointerEvent;
        }) => void)[] | undefined;
        pointerUp?: ((event: PhotoSwipeEvent<"pointerUp"> & {
            originalEvent: PointerEvent;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        pinchClose?: ((event: PhotoSwipeEvent<"pinchClose"> & {
            bgOpacity: number;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         *
         *
         * https://photoswipe.com/events/#slide-content-events
         */
        verticalDrag?: ((event: PhotoSwipeEvent<"verticalDrag"> & {
            panY: number;
        }) => void)[] | undefined;
        contentInit?: ((event: PhotoSwipeEvent<"contentInit"> & {
            content: Content;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentLoad?: ((event: PhotoSwipeEvent<"contentLoad"> & {
            content: Content;
            isLazy: boolean;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentLoadImage?: ((event: PhotoSwipeEvent<"contentLoadImage"> & {
            content: Content;
            isLazy: boolean;
        }) => void)[] | undefined;
        loadComplete?: ((event: PhotoSwipeEvent<"loadComplete"> & {
            content: Content;
            slide: any;
            isError?: boolean | undefined;
        }) => void)[] | undefined;
        loadError?: ((event: PhotoSwipeEvent<"loadError"> & {
            content: Content;
            slide: any;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentResize?: ((event: PhotoSwipeEvent<"contentResize"> & {
            content: Content;
            width: number;
            height: number;
        }) => void)[] | undefined;
        imageSizeChange?: ((event: PhotoSwipeEvent<"imageSizeChange"> & {
            content: Content;
            width: number;
            height: number;
            slide: any;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentLazyLoad?: ((event: PhotoSwipeEvent<"contentLazyLoad"> & {
            content: Content;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentAppend?: ((event: PhotoSwipeEvent<"contentAppend"> & {
            content: Content;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentActivate?: ((event: PhotoSwipeEvent<"contentActivate"> & {
            content: Content;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentDeactivate?: ((event: PhotoSwipeEvent<"contentDeactivate"> & {
            content: Content;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentRemove?: ((event: PhotoSwipeEvent<"contentRemove"> & {
            content: Content;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         *
         *
         * undocumented
         */
        contentDestroy?: ((event: PhotoSwipeEvent<"contentDestroy"> & {
            content: Content;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        imageClickAction?: ((event: PhotoSwipeEvent<"imageClickAction"> & {
            point: any;
            originalEvent: PointerEvent;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        bgClickAction?: ((event: PhotoSwipeEvent<"bgClickAction"> & {
            point: any;
            originalEvent: PointerEvent;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        tapAction?: ((event: PhotoSwipeEvent<"tapAction"> & {
            point: any;
            originalEvent: PointerEvent;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        doubleTapAction?: ((event: PhotoSwipeEvent<"doubleTapAction"> & {
            point: any;
            originalEvent: PointerEvent;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        keydown?: ((event: PhotoSwipeEvent<"keydown"> & {
            originalEvent: KeyboardEvent;
        }) => void)[] | undefined;
        moveMainScroll?: ((event: PhotoSwipeEvent<"moveMainScroll"> & {
            x: number;
            dragging: boolean;
        }) => void)[] | undefined;
        firstZoomPan?: ((event: PhotoSwipeEvent<"firstZoomPan"> & {
            slide: any;
        }) => void)[] | undefined;
        gettingData?: ((event: PhotoSwipeEvent<"gettingData"> & {
            slide: any;
            data: any;
            index: number;
        }) => void)[] | undefined;
        beforeResize?: ((event: PhotoSwipeEvent<"beforeResize">) => void)[] | undefined;
        resize?: ((event: PhotoSwipeEvent<"resize">) => void)[] | undefined;
        viewportSize?: ((event: PhotoSwipeEvent<"viewportSize">) => void)[] | undefined;
        updateScrollOffset?: ((event: PhotoSwipeEvent<"updateScrollOffset">) => void)[] | undefined;
        slideInit?: ((event: PhotoSwipeEvent<"slideInit"> & {
            slide: any;
        }) => void)[] | undefined;
        afterSetContent?: ((event: PhotoSwipeEvent<"afterSetContent"> & {
            slide: any;
        }) => void)[] | undefined;
        slideLoad?: ((event: PhotoSwipeEvent<"slideLoad"> & {
            slide: any;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        appendHeavy?: ((event: PhotoSwipeEvent<"appendHeavy"> & {
            slide: any;
        }) => void)[] | undefined;
        appendHeavyContent?: ((event: PhotoSwipeEvent<"appendHeavyContent"> & {
            slide: any;
        }) => void)[] | undefined;
        slideActivate?: ((event: PhotoSwipeEvent<"slideActivate"> & {
            slide: any;
        }) => void)[] | undefined;
        slideDeactivate?: ((event: PhotoSwipeEvent<"slideDeactivate"> & {
            slide: any;
        }) => void)[] | undefined;
        slideDestroy?: ((event: PhotoSwipeEvent<"slideDestroy"> & {
            slide: any;
        }) => void)[] | undefined;
        beforeZoomTo?: ((event: PhotoSwipeEvent<"beforeZoomTo"> & {
            destZoomLevel: number;
            centerPoint: any;
            transitionDuration: number | false;
        }) => void)[] | undefined;
        zoomPanUpdate?: ((event: PhotoSwipeEvent<"zoomPanUpdate"> & {
            slide: any;
        }) => void)[] | undefined;
        initialZoomPan?: ((event: PhotoSwipeEvent<"initialZoomPan"> & {
            slide: any;
        }) => void)[] | undefined;
        calcSlideSize?: ((event: PhotoSwipeEvent<"calcSlideSize"> & {
            slide: any;
        }) => void)[] | undefined;
        resolutionChanged?: ((event: PhotoSwipeEvent<"resolutionChanged">) => void)[] | undefined;
        /**
         * can be default prevented
         */
        wheel?: ((event: PhotoSwipeEvent<"wheel"> & {
            originalEvent: WheelEvent;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        contentAppendImage?: ((event: PhotoSwipeEvent<"contentAppendImage"> & {
            content: Content;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        lazyLoadSlide?: ((event: PhotoSwipeEvent<"lazyLoadSlide"> & {
            index: number;
            itemData: any;
        }) => void)[] | undefined;
        lazyLoad?: ((event: PhotoSwipeEvent<"lazyLoad">) => void)[] | undefined;
        calcBounds?: ((event: PhotoSwipeEvent<"calcBounds"> & {
            slide: any;
        }) => void)[] | undefined;
        /**
         * legacy
         */
        zoomLevelsUpdate?: ((event: PhotoSwipeEvent<"zoomLevelsUpdate"> & {
            zoomLevels: ZoomLevel;
            slideData: any;
        }) => void)[] | undefined;
        init?: ((event: PhotoSwipeEvent<"init">) => void)[] | undefined;
        initialZoomIn?: ((event: PhotoSwipeEvent<"initialZoomIn">) => void)[] | undefined;
        initialZoomOut?: ((event: PhotoSwipeEvent<"initialZoomOut">) => void)[] | undefined;
        initialZoomInEnd?: ((event: PhotoSwipeEvent<"initialZoomInEnd">) => void)[] | undefined;
        initialZoomOutEnd?: ((event: PhotoSwipeEvent<"initialZoomOutEnd">) => void)[] | undefined;
        numItems?: ((event: PhotoSwipeEvent<"numItems"> & {
            dataSource: any;
            numItems: number;
        }) => void)[] | undefined;
        itemData?: ((event: PhotoSwipeEvent<"itemData"> & {
            itemData: any;
            index: number;
        }) => void)[] | undefined;
        thumbBounds?: ((event: PhotoSwipeEvent<"thumbBounds"> & {
            index: number;
            itemData: any;
            instance: any;
        }) => void)[] | undefined;
    };
    /**
     * @type {{ [T in keyof PhotoSwipeFiltersMap]?: Filter<T>[] }}
     */
    _filters: {
        /**
         * Modify the total amount of slides. Example on Data sources page.
         * https://photoswipe.com/filters/#numitems
         */
        numItems?: Filter<"numItems">[] | undefined;
        /**
         * Modify slide item data. Example on Data sources page.
         * https://photoswipe.com/filters/#itemdata
         */
        itemData?: Filter<"itemData">[] | undefined;
        /**
         * Modify item data when it's parsed from DOM element. Example on Data sources page.
         * https://photoswipe.com/filters/#domitemdata
         */
        domItemData?: Filter<"domItemData">[] | undefined;
        /**
         * Modify clicked gallery item index.
         * https://photoswipe.com/filters/#clickedindex
         */
        clickedIndex?: Filter<"clickedIndex">[] | undefined;
        /**
         * Modify placeholder image source.
         * https://photoswipe.com/filters/#placeholdersrc
         */
        placeholderSrc?: Filter<"placeholderSrc">[] | undefined;
        /**
         * Modify if the content is currently loading.
         * https://photoswipe.com/filters/#iscontentloading
         */
        isContentLoading?: Filter<"isContentLoading">[] | undefined;
        /**
         * Modify if the content can be zoomed.
         * https://photoswipe.com/filters/#iscontentzoomable
         */
        isContentZoomable?: Filter<"isContentZoomable">[] | undefined;
        /**
         * Modify if the placeholder should be used for the content.
         * https://photoswipe.com/filters/#usecontentplaceholder
         */
        useContentPlaceholder?: Filter<"useContentPlaceholder">[] | undefined;
        /**
         * Modify if the placeholder should be kept after the content is loaded.
         * https://photoswipe.com/filters/#iskeepingplaceholder
         */
        isKeepingPlaceholder?: Filter<"isKeepingPlaceholder">[] | undefined;
        /**
         * Modify an element when the content has error state (for example, if image cannot be loaded).
         * https://photoswipe.com/filters/#contenterrorelement
         */
        contentErrorElement?: Filter<"contentErrorElement">[] | undefined;
        /**
         * Modify a UI element that's being created.
         * https://photoswipe.com/filters/#uielement
         */
        uiElement?: Filter<"uiElement">[] | undefined;
        /**
         * Modify the thubmnail element from which opening zoom animation starts or ends.
         * https://photoswipe.com/filters/#thumbel
         */
        thumbEl?: Filter<"thumbEl">[] | undefined;
        /**
         * Modify the thubmnail bounds from which opening zoom animation starts or ends.
         * https://photoswipe.com/filters/#thumbbounds
         */
        thumbBounds?: Filter<"thumbBounds">[] | undefined;
        srcsetSizesWidth?: Filter<"srcsetSizesWidth">[] | undefined;
    };
    /** @type {PhotoSwipe=} */
    pswp: PhotoSwipe | undefined;
    /** @type {PhotoSwipeOptions} */
    options: any;
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     * @param {number} priority
     */
    addFilter<T extends keyof PhotoSwipeFiltersMap>(name: T, fn: PhotoSwipeFiltersMap[T], priority?: number): void;
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     */
    removeFilter<T_1 extends keyof PhotoSwipeFiltersMap>(name: T_1, fn: PhotoSwipeFiltersMap[T_1]): void;
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
     * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
     */
    applyFilters<T_2 extends keyof PhotoSwipeFiltersMap>(name: T_2, ...args: Parameters<PhotoSwipeFiltersMap[T_2]>): Parameters<PhotoSwipeFiltersMap[T_2]>[0];
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    on<T_3 extends keyof PhotoSwipeEventsMap>(name: T_3, fn: EventCallback<T_3>): void;
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    off<T_4 extends keyof PhotoSwipeEventsMap>(name: T_4, fn: EventCallback<T_4>): void;
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {PhotoSwipeEventsMap[T]} [details]
     * @returns {AugmentedEvent<T>}
     */
    dispatch<T_5 extends keyof PhotoSwipeEventsMap>(name: T_5, details?: PhotoSwipeEventsMap[T_5] | undefined): AugmentedEvent<T_5>;
}
