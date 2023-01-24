export { PhotoSwipe as default };
export type Point = any;
export type Falsy = undefined | null | false | '' | 0;
export type HTMLElementTagName = keyof HTMLElementTagNameMap;
export type PhotoSwipeOptions = any;
export type PhotoSwipe = any;
export type SlideData = any;
/**
 * <T, P>
 */
export type AddPostfix<T, P> = any;
export type Gestures = any;
export type Actions = 'imageClick' | 'bgClick' | 'tap' | 'doubleTap';
/**
 * <T>
 */
export type Methods<T> = any;
export type UIElementMarkupProps = {
    isCustomSVG?: boolean | undefined;
    inner: string;
    outlineID?: string | undefined;
    size?: string | number | undefined;
};
export type UIElementData = {
    name?: string | undefined;
    className?: string | undefined;
    html?: UIElementMarkup | undefined;
    isButton?: boolean | undefined;
    tagName?: keyof HTMLElementTagNameMap | undefined;
    title?: string | undefined;
    ariaLabel?: string | undefined;
    onInit?: ((element: HTMLElement, pswp: PhotoSwipe) => void) | undefined;
    onClick?: any;
    appendTo?: "bar" | "wrapper" | "root" | undefined;
    order?: number | undefined;
};
export type DefaultUIElements = 'arrowPrev' | 'arrowNext' | 'close' | 'zoom' | 'counter';
export type UIElementMarkup = string | UIElementMarkupProps;
export type Bounds = {
    x: number;
    y: number;
    w: number;
    innerRect?: {
        w: number;
        h: number;
        x: number;
        y: number;
    };
};
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
export type PoolItem = {
    target: HTMLElement | Window | Document;
    type: string;
    listener: (e: any) => void;
    passive: boolean;
};
export type Slide = any;
export type Axis = 'x' | 'y';
export type ZoomLevelOption = number | "fit" | "fill" | ((zoomLevelObject: ZoomLevel) => number);
export type ItemHolder = {
    el: HTMLDivElement;
    slide?: Slide;
};
export type AnimationProps = any;
export type Animation = SpringAnimation | CSSAnimation;
export type PhotoSwipeLightbox = any;
export type DataSource = any;
export type ContentDefault = any;
export type ZoomLevel = any;
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
    clickedIndex: (clickedIndex: number, e: MouseEvent, instance: any) => number;
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
    uiElement: (element: HTMLElement, data: UIElementData) => HTMLElement;
    /**
     * Modify the thubmnail element from which opening zoom animation starts or ends.
     * https://photoswipe.com/filters/#thumbel
     */
    thumbEl: (thumbnail: HTMLElement, itemData: any, index: number) => HTMLElement;
    /**
     * Modify the thubmnail bounds from which opening zoom animation starts or ends.
     * https://photoswipe.com/filters/#thumbbounds
     */
    thumbBounds: (thumbBounds: Bounds, itemData: any, index: number) => Bounds;
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
export type PhotoSwipeBase = any;
/**
 * <T>
 */
export type Type<T> = any;
export type Size = {
    x?: number;
    y?: number;
};
export type Padding = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export type DataSourceArray = SlideData[];
export type DataSourceObject = {
    gallery: HTMLElement;
    items?: HTMLElement[];
};
export type ActionFn = (point: any, originalEvent: PointerEvent) => void;
export type ActionType = 'close' | 'next' | 'zoom' | 'zoom-or-close' | 'toggle-controls';
export type PhotoSwipeModule = Type<PhotoSwipe> | {
    default: Type<PhotoSwipe>;
};
export type PhotoSwipeModuleOption = PhotoSwipeModule | Promise<PhotoSwipeModule> | (() => Promise<PhotoSwipeModule>);
/**
 * PhotoSwipe Core
 */
declare class PhotoSwipe extends PhotoSwipeBase {
    /**
     * @param {PhotoSwipeOptions} options
     */
    constructor(options: any);
    /**
     * offset of viewport relative to document
     *
     * @type {{ x?: number; y?: number }}
     */
    offset: {
        x?: number | undefined;
        y?: number | undefined;
    };
    /**
     * @type {{ x?: number; y?: number }}
     * @private
     */
    private _prevViewportSize;
    /**
     * Size of scrollable PhotoSwipe viewport
     *
     * @type {{ x?: number; y?: number }}
     */
    viewportSize: {
        x?: number | undefined;
        y?: number | undefined;
    };
    /**
     * background (backdrop) opacity
     *
     * @type {number}
     */
    bgOpacity: number;
    /** @type {HTMLDivElement} */
    topBar: HTMLDivElement;
    events: DOMEvents;
    /** @type {Animations} */
    animations: Animations;
    mainScroll: MainScroll;
    gestures: Gestures;
    opener: Opener;
    keyboard: Keyboard;
    contentLoader: ContentLoader;
    init(): true | undefined;
    isOpen: boolean | undefined;
    currIndex: any;
    potentialIndex: any;
    scrollWheel: ScrollWheel | undefined;
    _initialItemData: any;
    _initialThumbBounds: Bounds | undefined;
    /**
     * Get looped slide index
     * (for example, -1 will return the last slide)
     *
     * @param {number} index
     */
    getLoopedIndex(index: number): number;
    appendHeavy(): void;
    /**
     * Change the slide
     * @param {number} index New index
     */
    goTo(index: number): void;
    /**
     * Go to the next slide.
     */
    next(): void;
    /**
     * Go to the previous slide.
     */
    prev(): void;
    /**
     * @see slide/slide.js zoomTo
     *
     * @param {Parameters<Slide['zoomTo']>} args
     */
    zoomTo(destZoomLevel: number, centerPoint: {
        x?: number | undefined;
        y?: number | undefined;
    }, transitionDuration?: number | false | undefined, ignoreBounds?: boolean | undefined): void;
    /**
     * @see slide/slide.js toggleZoom
     */
    toggleZoom(): void;
    /**
     * Close the gallery.
     * After closing transition ends - destroy it
     */
    close(): void;
    isDestroying: boolean | undefined;
    /**
     * Destroys the gallery:
     * - instantly closes the gallery
     * - unbinds events,
     * - cleans intervals and timeouts
     * - removes elements from DOM
     */
    destroy(): void;
    listeners: any;
    /**
     * Refresh/reload content of a slide by its index
     *
     * @param {number} slideIndex
     */
    refreshSlideContent(slideIndex: number): void;
    /** @type {Slide} */
    currSlide: Slide | undefined;
    /**
     * Set slide content
     *
     * @param {ItemHolder} holder mainScroll.itemHolders array item
     * @param {number} index Slide index
     * @param {boolean=} force If content should be set even if index wasn't changed
     */
    setContent(holder: ItemHolder, index: number, force?: boolean | undefined): void;
    getViewportCenterPoint(): {
        x: number;
        y: number;
    };
    /**
     * Update size of all elements.
     * Executed on init and on page resize.
     *
     * @param {boolean=} force Update size even if size of viewport was not changed.
     */
    updateSize(force?: boolean | undefined): void;
    /**
     * @param {number} opacity
     */
    applyBgOpacity(opacity: number): void;
    /**
     * Whether mouse is detected
     */
    mouseDetected(): void;
    hasMouse: boolean | undefined;
    /**
     * Page resize event handler
     *
     * @private
     */
    private _handlePageResize;
    /**
     * Page scroll offset is used
     * to get correct coordinates
     * relative to PhotoSwipe viewport.
     *
     * @private
     */
    private _updatePageScrollOffset;
    /**
     * @param {number} x
     * @param {number} y
     */
    setScrollOffset(x: number, y: number): void;
    /**
     * Create main HTML structure of PhotoSwipe,
     * and add it to DOM
     *
     * @private
     */
    private _createMainStructure;
    element: HTMLDivElement | undefined;
    template: HTMLDivElement | undefined;
    bg: HTMLDivElement | undefined;
    scrollWrap: HTMLDivElement | undefined;
    container: HTMLDivElement | undefined;
    ui: UI | undefined;
    /**
     * Get position and dimensions of small thumbnail
     *   {x:,y:,w:}
     *
     * Height is optional (calculated based on the large image)
     */
    getThumbBounds(): Bounds | undefined;
    /**
     * If the PhotoSwipe can have continious loop
     * @returns Boolean
     */
    canLoop(): any;
    /**
     * @param {PhotoSwipeOptions} options
     * @private
     */
    private _prepareOptions;
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
    pswp: PhotoSwipe | undefined;
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
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 * Renders and allows to control a single slide
 */
declare class Slide {
    /**
     * @param {SlideData} data
     * @param {number} index
     * @param {PhotoSwipe} pswp
     */
    constructor(data: any, index: number, pswp: PhotoSwipe);
    data: any;
    index: number;
    pswp: PhotoSwipe;
    isActive: boolean;
    currentResolution: number;
    /** @type {Point} */
    panAreaSize: any;
    isFirstSlide: boolean;
    zoomLevels: ZoomLevel;
    pan: {
        x: number;
        y: number;
    };
    content: Content;
    container: HTMLDivElement;
    currZoomLevel: number;
    /** @type {number} */
    width: number;
    /** @type {number} */
    height: number;
    bounds: PanBounds;
    prevDisplayedWidth: number;
    prevDisplayedHeight: number;
    /**
     * If this slide is active/current/visible
     *
     * @param {boolean} isActive
     */
    setIsActive(isActive: boolean): void;
    /**
     * Appends slide content to DOM
     *
     * @param {HTMLElement} holderElement
     */
    append(holderElement: HTMLElement): void;
    holderElement: HTMLElement | undefined;
    load(): void;
    /**
     * Append "heavy" DOM elements
     *
     * This may depend on a type of slide,
     * but generally these are large images.
     */
    appendHeavy(): void;
    heavyAppended: boolean | undefined;
    /**
     * Triggered when this slide is active (selected).
     *
     * If it's part of opening/closing transition -
     * activate() will trigger after the transition is ended.
     */
    activate(): void;
    /**
     * Triggered when this slide becomes inactive.
     *
     * Slide can become inactive only after it was active.
     */
    deactivate(): void;
    /**
     * The slide should destroy itself, it will never be used again.
     * (unbind all events and destroy internal components)
     */
    destroy(): void;
    resize(): void;
    /**
     * Apply size to current slide content,
     * based on the current resolution and scale.
     *
     * @param {boolean=} force if size should be updated even if dimensions weren't changed
     */
    updateContentSize(force?: boolean | undefined): void;
    /**
     * @param {number} width
     * @param {number} height
     */
    sizeChanged(width: number, height: number): boolean;
    getPlaceholderElement(): HTMLDivElement | undefined;
    /**
     * Zoom current slide image to...
     *
     * @param {number} destZoomLevel Destination zoom level.
     * @param {{ x?: number; y?: number }} centerPoint
     * Transform origin center point, or false if viewport center should be used.
     * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
     * @param {boolean=} ignoreBounds Minimum and maximum zoom levels will be ignored.
     * @return {boolean=} Returns true if animated.
     */
    zoomTo(destZoomLevel: number, centerPoint: {
        x?: number;
        y?: number;
    }, transitionDuration?: number | false | undefined, ignoreBounds?: boolean | undefined): boolean | undefined;
    /**
     * @param {{ x?: number, y?: number }} [centerPoint]
     */
    toggleZoom(centerPoint?: {
        x?: number | undefined;
        y?: number | undefined;
    } | undefined): void;
    /**
     * Updates zoom level property and recalculates new pan bounds,
     * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
     *
     * @param {number} currZoomLevel
     */
    setZoomLevel(currZoomLevel: number): void;
    /**
     * Get pan position after zoom at a given `point`.
     *
     * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
     * pan bounds according to the new zoom level.
     *
     * @param {'x' | 'y'} axis
     * @param {{ x?: number; y?: number }} [point]
     * point based on which zoom is performed, usually refers to the current mouse position,
     * if false - viewport center will be used.
     * @param {number=} prevZoomLevel Zoom level before new zoom was applied.
     */
    calculateZoomToPanOffset(axis: 'x' | 'y', point?: {
        x?: number | undefined;
        y?: number | undefined;
    } | undefined, prevZoomLevel?: number | undefined): any;
    /**
     * Apply pan and keep it within bounds.
     *
     * @param {number} panX
     * @param {number} panY
     */
    panTo(panX: number, panY: number): void;
    /**
     * If the slide in the current state can be panned by the user
     */
    isPannable(): boolean | 0;
    /**
     * If the slide can be zoomed
     */
    isZoomable(): boolean | 0;
    /**
     * Apply transform and scale based on
     * the current pan position (this.pan) and zoom level (this.currZoomLevel)
     */
    applyCurrentZoomPan(): void;
    zoomAndPanToInitial(): void;
    /**
     * Set translate and scale based on current resolution
     *
     * @param {number} x
     * @param {number} y
     * @param {number} zoom
     */
    _applyZoomTransform(x: number, y: number, zoom: number): void;
    calculateSize(): void;
    getCurrentTransform(): string;
    /**
     * Set resolution and re-render the image.
     *
     * For example, if the real image size is 2000x1500,
     * and resolution is 0.5 - it will be rendered as 1000x750.
     *
     * Image with zoom level 2 and resolution 0.5 is
     * the same as image with zoom level 1 and resolution 1.
     *
     * Used to optimize animations and make
     * sure that browser renders image in highest quality.
     * Also used by responsive images to load the correct one.
     *
     * @param {number} newResolution
     */
    _setResolution(newResolution: number): void;
}
/** @typedef {import('./animations.js').AnimationProps} AnimationProps */
declare class SpringAnimation {
    /**
     * @param {AnimationProps} props
     */
    constructor(props: any);
    props: any;
    /** @type {() => void} */
    onFinish: () => void;
    _raf: number;
    destroy(): void;
}
/** @typedef {import('./animations.js').AnimationProps} AnimationProps */
/**
 * Runs CSS transition.
 */
declare class CSSAnimation {
    /**
     * onComplete can be unpredictable, be careful about current state
     *
     * @param {AnimationProps} props
     */
    constructor(props: any);
    props: any;
    /** @type {() => void} */
    onFinish: () => void;
    /** @private */
    private _target;
    /** @private */
    private _onComplete;
    /**
     * @private
     * @param {TransitionEvent} e
     */
    private _onTransitionEnd;
    /** @private */
    private _helperTimeout;
    /**
     * @private
     */
    private _finalizeAnimation;
    _finished: boolean | undefined;
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
    constructor(itemData: any, instance: PhotoSwipe, index: number);
    instance: PhotoSwipe;
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
    setSlide(slide: Slide): void;
    slide: Slide | null | undefined;
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
/**
 * @typedef {Object} PoolItem
 * @prop {HTMLElement | Window | Document} target
 * @prop {string} type
 * @prop {(e: any) => void} listener
 * @prop {boolean} passive
 */
declare class DOMEvents {
    /**
     * @type {PoolItem[]}
     * @private
     */
    private _pool;
    /**
     * Adds event listeners
     *
     * @param {HTMLElement | Window | Document} target
     * @param {string} type Can be multiple, separated by space.
     * @param {(e: any) => void} listener
     * @param {boolean=} passive
     */
    add(target: HTMLElement | Window | Document, type: string, listener: (e: any) => void, passive?: boolean | undefined): void;
    /**
     * Removes event listeners
     *
     * @param {HTMLElement | Window | Document} target
     * @param {string} type
     * @param {(e: any) => void} listener
     * @param {boolean=} passive
     */
    remove(target: HTMLElement | Window | Document, type: string, listener: (e: any) => void, passive?: boolean | undefined): void;
    /**
     * Removes all bound events
     */
    removeAll(): void;
    /**
     * Adds or removes event
     *
     * @param {HTMLElement | Window | Document} target
     * @param {string} type
     * @param {(e: any) => void} listener
     * @param {boolean} passive
     * @param {boolean=} unbind Whether the event should be added or removed
     * @param {boolean=} skipPool Whether events pool should be skipped
     */
    _toggleListener(target: HTMLElement | Window | Document, type: string, listener: (e: any) => void, passive: boolean, unbind?: boolean | undefined, skipPool?: boolean | undefined): void;
}
/** @typedef {SpringAnimation | CSSAnimation} Animation */
/**
 * @typedef {Object} AnimationProps
 *
 * @prop {HTMLElement=} target
 *
 * @prop {string=} name
 *
 * @prop {number=} start
 * @prop {number=} end
 * @prop {number=} duration
 * @prop {number=} velocity
 * @prop {number=} dampingRatio
 * @prop {number=} naturalFrequency
 *
 * @prop {(end: number) => void} [onUpdate]
 * @prop {() => void} [onComplete]
 * @prop {() => void} [onFinish]
 *
 * @prop {string=} transform
 * @prop {string=} opacity
 * @prop {string=} easing
 *
 * @prop {boolean=} isPan
 * @prop {boolean=} isMainScroll
 */
/**
 * Manages animations
 */
declare class Animations {
    /** @type {Animation[]} */
    activeAnimations: Animation[];
    /**
     * @param {AnimationProps} props
     */
    startSpring(props: any): void;
    /**
     * @param {AnimationProps} props
     */
    startTransition(props: any): void;
    /**
     * @param {AnimationProps} props
     * @param {boolean=} isSpring
     */
    _start(props: any, isSpring?: boolean | undefined): Animation;
    /**
     * @param {Animation} animation
     */
    stop(animation: Animation): void;
    stopAll(): void;
    /**
     * Stop all pan or zoom transitions
     */
    stopAllPan(): void;
    stopMainScroll(): void;
    /**
     * Returns true if main scroll transition is running
     */
    /**
     * Returns true if any pan or zoom transition is running
     */
    isPanRunning(): boolean;
}
/**
 * Handles movement of the main scrolling container
 * (for example, it repositions when user swipes left or right).
 *
 * Also stores its state.
 */
declare class MainScroll {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp: PhotoSwipe);
    pswp: PhotoSwipe;
    x: number;
    /** @type {number} */
    slideWidth: number;
    /** @type {ItemHolder[]} */
    itemHolders: ItemHolder[];
    /**
     * Position the scroller and slide containers
     * according to viewport size.
     *
     * @param {boolean=} resizeSlides Whether slides content should resized
     */
    resize(resizeSlides?: boolean | undefined): void;
    /**
     * Reset X position of the main scroller to zero
     */
    resetPosition(): void;
    _currPositionIndex: number | undefined;
    _prevPositionIndex: number | undefined;
    _containerShiftIndex: number | undefined;
    /**
     * Create and append array of three items
     * that hold data about slides in DOM
     */
    appendHolders(): void;
    /**
     * Whether the main scroll can be horizontally swiped to the next or previous slide.
     */
    canBeSwiped(): boolean;
    /**
     * Move main scroll by X amount of slides.
     * For example:
     *   `-1` will move to the previous slide,
     *    `0` will reset the scroll position of the current slide,
     *    `3` will move three slides forward
     *
     * If loop option is enabled - index will be automatically looped too,
     * (for example `-1` will move to the last slide of the gallery).
     *
     * @param {number} diff
     * @param {boolean=} animate
     * @param {number=} velocityX
     * @returns {boolean} whether index was changed or not
     */
    moveIndexBy(diff: number, animate?: boolean | undefined, velocityX?: number | undefined): boolean;
    /**
     * X position of the main scroll for the current slide
     * (ignores position during dragging)
     */
    getCurrSlideX(): number;
    /**
     * Whether scroll position is shifted.
     * For example, it will return true if the scroll is being dragged or animated.
     */
    isShifted(): boolean;
    /**
     * Update slides X positions and set their content
     */
    updateCurrItem(): void;
    /**
     * Move the X position of the main scroll container
     *
     * @param {number} x
     * @param {boolean=} dragging
     */
    moveTo(x: number, dragging?: boolean | undefined): void;
}
/**
 * Gestures class bind touch, pointer or mouse events
 * and emits drag to drag-handler and zoom events zoom-handler.
 *
 * Drag and zoom events are emited in requestAnimationFrame,
 * and only when one of pointers was actually changed.
 */
declare class Gestures {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp: PhotoSwipe);
    pswp: PhotoSwipe;
    /** @type {'x' | 'y'} */
    dragAxis: 'x' | 'y';
    /** @type {Point} */
    p1: any;
    /** @type {Point} */
    p2: any;
    /** @type {Point} */
    prevP1: any;
    /** @type {Point} */
    prevP2: any;
    /** @type {Point} */
    startP1: any;
    /** @type {Point} */
    startP2: any;
    /** @type {Point} */
    velocity: any;
    /** @type {Point} */
    _lastStartP1: any;
    /** @type {Point} */
    _intervalP1: any;
    _numActivePoints: number;
    /** @type {Point[]} */
    _ongoingPointers: Point[];
    _touchEventEnabled: boolean;
    _pointerEventEnabled: boolean;
    supportsTouch: boolean;
    drag: DragHandler;
    zoomLevels: ZoomHandler;
    tapHandler: TapHandler;
    /**
     *
     * @param {'mouse' | 'touch' | 'pointer'} pref
     * @param {'down' | 'start'} down
     * @param {'up' | 'end'} up
     * @param {'cancel'} [cancel]
     */
    _bindEvents(pref: 'mouse' | 'touch' | 'pointer', down: 'down' | 'start', up: 'up' | 'end', cancel?: "cancel" | undefined): void;
    /**
     * @param {PointerEvent} e
     */
    onPointerDown(e: PointerEvent): void;
    pointerDown: boolean | undefined;
    isMultitouch: boolean | undefined;
    /**
     * @param {PointerEvent} e
     */
    onPointerMove(e: PointerEvent): void;
    isZooming: boolean | undefined;
    isDragging: boolean | undefined;
    _intervalTime: number | undefined;
    _velocityCalculated: boolean | undefined;
    /**
     * @private
     */
    private _finishDrag;
    /**
     * @param {PointerEvent} e
     */
    onPointerUp(e: PointerEvent): void;
    /**
     * @private
     */
    private _rafRenderLoop;
    raf: number | null | undefined;
    /**
     * Update velocity at 50ms interval
     *
     * @param {boolean=} force
     */
    _updateVelocity(force?: boolean | undefined): void;
    /**
     * @private
     * @param {PointerEvent} e
     */
    private _finishTap;
    _tapTimer: NodeJS.Timeout | null | undefined;
    /**
     * @private
     */
    private _clearTapTimer;
    /**
     * Get velocity for axis
     *
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} duration
     */
    private _getVelocity;
    /**
     * @private
     */
    private _rafStopLoop;
    /**
     * @private
     * @param {PointerEvent} e
     */
    private _preventPointerEventBehaviour;
    /**
     * Parses and normalizes points from the touch, mouse or pointer event.
     * Updates p1 and p2.
     *
     * @private
     * @param {PointerEvent | TouchEvent} e
     * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
     */
    private _updatePoints;
    _updatePrevPoints(): void;
    _updateStartPoints(): void;
    _calculateDragDirection(): void;
    /**
     * Converts touch, pointer or mouse event
     * to PhotoSwipe point.
     *
     * @private
     * @param {Touch | PointerEvent} e
     * @param {Point} p
     */
    private _convertEventPosToPoint;
    /**
     * @private
     * @param {PointerEvent} e
     */
    private _onClick;
}
/**
 * Manages opening and closing transitions of the PhotoSwipe.
 *
 * It can perform zoom, fade or no transition.
 */
declare class Opener {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp: PhotoSwipe);
    pswp: PhotoSwipe;
    isClosed: boolean;
    _prepareOpen(): void;
    /** @type {false | Bounds} */
    _thumbBounds: false | Bounds;
    open(): void;
    close(): boolean;
    isOpen: boolean | undefined;
    isOpening: boolean | undefined;
    isClosing: boolean | undefined;
    _duration: any;
    _applyStartProps(): void;
    _placeholder: HTMLDivElement | undefined;
    _useAnimation: boolean | undefined;
    _animateZoom: boolean | undefined;
    _animateRootOpacity: any;
    _animateBgOpacity: boolean | undefined;
    _opacityElement: HTMLDivElement | undefined;
    _croppedZoom: boolean | undefined;
    _cropContainer1: HTMLDivElement | undefined;
    _cropContainer2: HTMLElement | undefined;
    _start(): void;
    _initiate(): void;
    _onAnimationComplete(): void;
    _animateToOpenState(): void;
    _animateToClosedState(): void;
    /**
     * @param {boolean=} animate
     */
    _setClosedStateZoomPan(animate?: boolean | undefined): void;
    /**
     * @param {HTMLElement} target
     * @param {'transform' | 'opacity'} prop
     * @param {string} propValue
     */
    _animateTo(target: HTMLElement, prop: 'transform' | 'opacity', propValue: string): void;
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/**
 * @template T
 * @typedef {import('./types.js').Methods<T>} Methods<T>
 */
/**
 * - Manages keyboard shortcuts.
 * - Heps trap focus within photoswipe.
 */
declare class Keyboard {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp: PhotoSwipe);
    pswp: PhotoSwipe;
    _focusRoot(): void;
    _wasFocused: boolean | undefined;
    /**
     * @param {KeyboardEvent} e
     */
    _onKeyDown(e: KeyboardEvent): void;
    /**
     * Trap focus inside photoswipe
     *
     * @param {FocusEvent} e
     */
    _onFocusIn(e: FocusEvent): void;
}
declare class ContentLoader {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp: PhotoSwipe);
    pswp: PhotoSwipe;
    limit: number;
    /** @type {Content[]} */
    _cachedItems: Content[];
    /**
     * Lazy load nearby slides based on `preload` option.
     *
     * @param {number=} diff Difference between slide indexes that was changed recently, or 0.
     */
    updateLazy(diff?: number | undefined): void;
    /**
     * @param {number} index
     */
    loadSlideByIndex(index: number): void;
    /**
     * @param {Slide} slide
     */
    getContentBySlide(slide: Slide): Content;
    /**
     * @param {Content} content
     */
    addToCache(content: Content): void;
    /**
     * Removes an image from cache, does not destroy() it, just removes.
     *
     * @param {number} index
     */
    removeByIndex(index: number): void;
    /**
     * @param {number} index
     */
    getContentByIndex(index: number): Content | undefined;
    destroy(): void;
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/**
 * Handles scroll wheel.
 * Can pan and zoom current slide image.
 */
declare class ScrollWheel {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp: PhotoSwipe);
    pswp: PhotoSwipe;
    /**
     * @private
     * @param {WheelEvent} e
     */
    private _onWheel;
}
declare class UI {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp: PhotoSwipe);
    pswp: PhotoSwipe;
    /** @type {() => void} */
    updatePreloaderVisibility: () => void;
    /** @type {number} */
    _lastUpdatedZoomLevel: number;
    init(): void;
    isRegistered: boolean | undefined;
    /** @type {UIElementData[]} */
    uiElementsData: UIElementData[] | undefined;
    /** @type {(UIElement | UIElementData)[]} */
    items: (UIElementData | UIElement)[] | undefined;
    /**
     * @param {UIElementData} elementData
     */
    registerElement(elementData: UIElementData): void;
    /**
     * Fired each time zoom or pan position is changed.
     * Update classes that control visibility of zoom button and cursor icon.
     */
    _onZoomPanUpdate(): void;
}
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {{ x?: number; y?: number }} Point */
/** @typedef {'x' | 'y'} Axis */
/**
 * Calculates minimum, maximum and initial (center) bounds of a slide
 */
declare class PanBounds {
    /**
     * @param {Slide} slide
     */
    constructor(slide: Slide);
    slide: Slide;
    currZoomLevel: number;
    /** @type {Point} */
    center: any;
    /** @type {Point} */
    max: any;
    /** @type {Point} */
    min: any;
    /**
     * _getItemBounds
     *
     * @param {number} currZoomLevel
     */
    update(currZoomLevel: number): void;
    /**
     * _calculateItemBoundsForAxis
     *
     * @param {Axis} axis
     */
    _updateAxis(axis: Axis): void;
    reset(): void;
    /**
     * Correct pan position if it's beyond the bounds
     *
     * @param {Axis} axis x or y
     * @param {number} panOffset
     */
    correctPan(axis: Axis, panOffset: number): number;
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
            data: UIElementData;
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
            slide: Slide;
            isError?: boolean | undefined;
        }) => void)[] | undefined;
        loadError?: ((event: PhotoSwipeEvent<"loadError"> & {
            content: Content;
            slide: Slide;
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
            slide: Slide;
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
            slide: Slide;
        }) => void)[] | undefined;
        gettingData?: ((event: PhotoSwipeEvent<"gettingData"> & {
            slide: Slide;
            data: any;
            index: number;
        }) => void)[] | undefined;
        beforeResize?: ((event: PhotoSwipeEvent<"beforeResize">) => void)[] | undefined;
        resize?: ((event: PhotoSwipeEvent<"resize">) => void)[] | undefined;
        viewportSize?: ((event: PhotoSwipeEvent<"viewportSize">) => void)[] | undefined;
        updateScrollOffset?: ((event: PhotoSwipeEvent<"updateScrollOffset">) => void)[] | undefined;
        slideInit?: ((event: PhotoSwipeEvent<"slideInit"> & {
            slide: Slide;
        }) => void)[] | undefined;
        afterSetContent?: ((event: PhotoSwipeEvent<"afterSetContent"> & {
            slide: Slide;
        }) => void)[] | undefined;
        slideLoad?: ((event: PhotoSwipeEvent<"slideLoad"> & {
            slide: Slide;
        }) => void)[] | undefined;
        /**
         * can be default prevented
         */
        appendHeavy?: ((event: PhotoSwipeEvent<"appendHeavy"> & {
            slide: Slide;
        }) => void)[] | undefined;
        appendHeavyContent?: ((event: PhotoSwipeEvent<"appendHeavyContent"> & {
            slide: Slide;
        }) => void)[] | undefined;
        slideActivate?: ((event: PhotoSwipeEvent<"slideActivate"> & {
            slide: Slide;
        }) => void)[] | undefined;
        slideDeactivate?: ((event: PhotoSwipeEvent<"slideDeactivate"> & {
            slide: Slide;
        }) => void)[] | undefined;
        slideDestroy?: ((event: PhotoSwipeEvent<"slideDestroy"> & {
            slide: Slide;
        }) => void)[] | undefined;
        beforeZoomTo?: ((event: PhotoSwipeEvent<"beforeZoomTo"> & {
            destZoomLevel: number;
            centerPoint: any;
            transitionDuration: number | false;
        }) => void)[] | undefined;
        zoomPanUpdate?: ((event: PhotoSwipeEvent<"zoomPanUpdate"> & {
            slide: Slide;
        }) => void)[] | undefined;
        initialZoomPan?: ((event: PhotoSwipeEvent<"initialZoomPan"> & {
            slide: Slide;
        }) => void)[] | undefined;
        calcSlideSize?: ((event: PhotoSwipeEvent<"calcSlideSize"> & {
            slide: Slide;
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
            slide: Slide;
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
            instance: PhotoSwipe;
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
/**
 * Handles single pointer dragging
 */
declare class DragHandler {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures: Gestures);
    gestures: Gestures;
    pswp: PhotoSwipe;
    /** @type {Point} */
    startPan: any;
    start(): void;
    change(): void;
    end(): void;
    /**
     * @private
     * @param {'x' | 'y'} axis
     */
    private _finishPanGestureForAxis;
    /**
     * Update position of the main scroll,
     * or/and update pan position of the current slide.
     *
     * Should return true if it changes (or can change) main scroll.
     *
     * @private
     * @param {'x' | 'y'} axis
     */
    private _panOrMoveMainScroll;
    /**
     * Relation between pan Y position and third of viewport height.
     *
     * When we are at initial position (center bounds) - the ratio is 0,
     * if position is shifted upwards - the ratio is negative,
     * if position is shifted downwards - the ratio is positive.
     *
     * @private
     * @param {number} panY The current pan Y position.
     */
    private _getVerticalDragRatio;
    /**
     * Set pan position of the current slide.
     * Apply friction if the position is beyond the pan bounds,
     * or if custom friction is defined.
     *
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} potentialPan
     * @param {number=} customFriction (0.1 - 1)
     */
    private _setPanWithFriction;
}
declare class ZoomHandler {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures: Gestures);
    gestures: Gestures;
    pswp: PhotoSwipe;
    /** @type {Point} */
    _startPan: any;
    /** @type {Point} */
    _startZoomPoint: any;
    /** @type {Point} */
    _zoomPoint: any;
    start(): void;
    _startZoomLevel: number | undefined;
    _wasOverFitZoomLevel: boolean | undefined;
    change(): void;
    end(): void;
    /**
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} currZoomLevel
     */
    private _calculatePanForZoomLevel;
    /**
     * Correct currZoomLevel and pan if they are
     * beyond minimum or maximum values.
     * With animation.
     *
     * @param {boolean=} ignoreGesture
     * Wether gesture coordinates should be ignored when calculating destination pan position.
     */
    correctZoomPan(ignoreGesture?: boolean | undefined): void;
}
/**
 * Tap, double-tap handler.
 */
declare class TapHandler {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures: Gestures);
    gestures: Gestures;
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    click(point: any, originalEvent: PointerEvent): void;
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    tap(point: any, originalEvent: PointerEvent): void;
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    doubleTap(point: any, originalEvent: PointerEvent): void;
    /**
     * @param {Actions} actionName
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    _doClickOrTapAction(actionName: Actions, point: any, originalEvent: PointerEvent): void;
}
declare class UIElement {
    /**
     * @param {PhotoSwipe} pswp
     * @param {UIElementData} data
     */
    constructor(pswp: PhotoSwipe, data: UIElementData);
}
