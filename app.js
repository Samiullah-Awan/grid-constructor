/* ==========================================================================
   FLEXIGRID STUDIO - APPLICATION LOGIC
   ========================================================================== */

// --- Application State ---
const state = {
  mode: 'grid', // 'grid' or 'flex'
  activeCodeLang: 'css', // 'css' or 'html'
  selectedItemId: null,
  
  // Grid container state
  grid: {
    cols: 3,
    rows: 3,
    columnTracks: ['33.33%', '33.33%', '33.33%'],
    rowTracks: ['33.33%', '33.33%', '33.33%'],
    colGap: 16,
    rowGap: 16,
    padding: 16,
    justifyItems: 'stretch',
    alignItems: 'stretch'
  },
  
  // Flex container state
  flex: {
    direction: 'row',
    wrap: 'wrap',
    gap: 16,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  
  // Items array
  items: [
    {
      id: '1',
      name: 'Header',
      colorClass: 'c-1',
      // Grid placement
      gridColumnStart: 1,
      gridColumnEnd: 4,
      gridRowStart: 1,
      gridRowEnd: 2,
      justifySelf: 'auto',
      alignSelf: 'auto',
      // Flex properties
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '100%',
      order: 0,
      flexAlignSelf: 'auto',
      width: null,
      height: 60
    },
    {
      id: '2',
      name: 'Sidebar',
      colorClass: 'c-2',
      // Grid placement
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 2,
      gridRowEnd: 3,
      justifySelf: 'auto',
      alignSelf: 'auto',
      // Flex properties
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: '200px',
      order: 0,
      flexAlignSelf: 'auto',
      width: 200,
      height: null
    },
    {
      id: '3',
      name: 'Content',
      colorClass: 'c-3',
      // Grid placement
      gridColumnStart: 2,
      gridColumnEnd: 4,
      gridRowStart: 2,
      gridRowEnd: 3,
      justifySelf: 'auto',
      alignSelf: 'auto',
      // Flex properties
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '400px',
      order: 0,
      flexAlignSelf: 'auto',
      width: null,
      height: null
    }
  ],
  itemIdCounter: 3
};

// --- Presets Data ---
const presets = {
  'holy-grail': {
    mode: 'grid',
    grid: {
      cols: 3,
      rows: 3,
      columnTracks: ['20%', '60%', '20%'],
      rowTracks: ['60px', '1fr', '60px'],
      colGap: 16,
      rowGap: 16,
      padding: 16,
      justifyItems: 'stretch',
      alignItems: 'stretch'
    },
    items: [
      { id: '1', name: 'Header', colorClass: 'c-1', gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 2, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '2', name: 'Left Sidebar', colorClass: 'c-2', gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 3, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '3', name: 'Main Content', colorClass: 'c-3', gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 3, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '4', name: 'Right Sidebar', colorClass: 'c-4', gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 2, gridRowEnd: 3, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '5', name: 'Footer', colorClass: 'c-5', gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 3, gridRowEnd: 4, justifySelf: 'auto', alignSelf: 'auto' }
    ],
    itemIdCounter: 5
  },
  'dashboard': {
    mode: 'grid',
    grid: {
      cols: 4,
      rows: 3,
      columnTracks: ['220px', '1fr', '1fr', '1fr'],
      rowTracks: ['60px', '1fr', '120px'],
      colGap: 16,
      rowGap: 16,
      padding: 16,
      justifyItems: 'stretch',
      alignItems: 'stretch'
    },
    items: [
      { id: '1', name: 'Sidebar Nav', colorClass: 'c-6', gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '2', name: 'Header Bar', colorClass: 'c-1', gridColumnStart: 2, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 2, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '3', name: 'Chart 1', colorClass: 'c-2', gridColumnStart: 2, gridColumnEnd: 4, gridRowStart: 2, gridRowEnd: 3, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '4', name: 'Kpi Summary', colorClass: 'c-3', gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 2, gridRowEnd: 3, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '5', name: 'Recent Activity', colorClass: 'c-4', gridColumnStart: 2, gridColumnEnd: 5, gridRowStart: 3, gridRowEnd: 4, justifySelf: 'auto', alignSelf: 'auto' }
    ],
    itemIdCounter: 5
  },
  'photo-gallery': {
    mode: 'grid',
    grid: {
      cols: 3,
      rows: 3,
      columnTracks: ['33.33%', '33.33%', '33.33%'],
      rowTracks: ['120px', '120px', '120px'],
      colGap: 12,
      rowGap: 12,
      padding: 16,
      justifyItems: 'stretch',
      alignItems: 'stretch'
    },
    items: [
      { id: '1', name: 'Hero Photo', colorClass: 'c-5', gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 3, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '2', name: 'Portrait Card', colorClass: 'c-2', gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 3, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '3', name: 'Landscape Bottom', colorClass: 'c-3', gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 3, gridRowEnd: 4, justifySelf: 'auto', alignSelf: 'auto' },
      { id: '4', name: 'Square Min', colorClass: 'c-4', gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 3, gridRowEnd: 4, justifySelf: 'auto', alignSelf: 'auto' }
    ],
    itemIdCounter: 4
  },
  'flex-cards': {
    mode: 'flex',
    flex: {
      direction: 'row',
      wrap: 'wrap',
      gap: 20,
      padding: 20,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch'
    },
    items: [
      { id: '1', name: 'Card Alpha', colorClass: 'c-1', flexGrow: 1, flexShrink: 1, flexBasis: '220px', order: 0, flexAlignSelf: 'auto', width: 220, height: 160 },
      { id: '2', name: 'Card Beta', colorClass: 'c-2', flexGrow: 1, flexShrink: 1, flexBasis: '220px', order: 0, flexAlignSelf: 'auto', width: 220, height: 160 },
      { id: '3', name: 'Card Gamma', colorClass: 'c-3', flexGrow: 1, flexShrink: 1, flexBasis: '220px', order: 0, flexAlignSelf: 'auto', width: 220, height: 160 },
      { id: '4', name: 'Card Delta', colorClass: 'c-4', flexGrow: 1, flexShrink: 1, flexBasis: '220px', order: 0, flexAlignSelf: 'auto', width: 220, height: 160 }
    ],
    itemIdCounter: 4
  },
  'flex-centered': {
    mode: 'flex',
    flex: {
      direction: 'column',
      wrap: 'nowrap',
      gap: 16,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'stretch'
    },
    items: [
      { id: '1', name: 'Hero Title', colorClass: 'c-5', flexGrow: 0, flexShrink: 1, flexBasis: 'auto', order: 0, flexAlignSelf: 'auto', width: null, height: null },
      { id: '2', name: 'CTA Button', colorClass: 'c-7', flexGrow: 0, flexShrink: 1, flexBasis: 'auto', order: 0, flexAlignSelf: 'auto', width: null, height: null }
    ],
    itemIdCounter: 2
  }
};

// --- DOM Cache ---
const DOM = {
  modeGridBtn: document.getElementById('mode-grid-btn'),
  modeFlexBtn: document.getElementById('mode-flex-btn'),
  presetsMenuBtn: document.getElementById('presets-menu-btn'),
  presetsDropdown: document.getElementById('presets-dropdown'),
  resetLayoutBtn: document.getElementById('reset-layout-btn'),
  
  // Containers
  gridControlsGroup: document.getElementById('grid-controls-group'),
  flexControlsGroup: document.getElementById('flex-controls-group'),
  layoutCanvas: document.getElementById('layout-canvas'),
  gridLinesOverlay: document.getElementById('grid-lines-overlay'),
  itemsContainer: document.getElementById('items-container'),
  
  // Inputs: Grid container
  gridColsInput: document.getElementById('grid-cols-input'),
  gridRowsInput: document.getElementById('grid-rows-input'),
  gridColGap: document.getElementById('grid-col-gap'),
  gridColGapVal: document.getElementById('grid-col-gap-val'),
  gridRowGap: document.getElementById('grid-row-gap'),
  gridRowGapVal: document.getElementById('grid-row-gap-val'),
  gridPadding: document.getElementById('grid-padding'),
  gridPaddingVal: document.getElementById('grid-padding-val'),
  gridJustifyItems: document.getElementById('grid-justify-items'),
  gridAlignItems: document.getElementById('grid-align-items'),
  
  // Inputs: Flex container
  flexDirectionSegment: document.getElementById('flex-direction-segment'),
  flexWrapSegment: document.getElementById('flex-wrap-segment'),
  flexGap: document.getElementById('flex-gap'),
  flexGapVal: document.getElementById('flex-gap-val'),
  flexPadding: document.getElementById('flex-padding'),
  flexPaddingVal: document.getElementById('flex-padding-val'),
  flexJustifyContent: document.getElementById('flex-justify-content'),
  flexAlignItems: document.getElementById('flex-align-items'),
  flexAlignContent: document.getElementById('flex-align-content'),
  
  // Item settings
  noItemSelectedMsg: document.getElementById('no-item-selected-msg'),
  itemSettingsPanel: document.getElementById('item-settings-panel'),
  selectedItemTitle: document.getElementById('selected-item-title'),
  selectedItemColorBadge: document.getElementById('selected-item-color-badge'),
  deleteItemBtn: document.getElementById('delete-item-btn'),
  addItemBtn: document.getElementById('add-item-btn'),
  
  // Item inputs: Grid
  gridItemSettings: document.getElementById('grid-item-settings'),
  itemColStart: document.getElementById('item-col-start'),
  itemColEnd: document.getElementById('item-col-end'),
  itemRowStart: document.getElementById('item-row-start'),
  itemRowEnd: document.getElementById('item-row-end'),
  itemGridJustifySelf: document.getElementById('item-grid-justify-self'),
  itemGridAlignSelf: document.getElementById('item-grid-align-self'),
  
  // Item inputs: Flex
  flexItemSettings: document.getElementById('flex-item-settings'),
  itemFlexGrow: document.getElementById('item-flex-grow'),
  itemFlexShrink: document.getElementById('item-flex-shrink'),
  itemFlexBasis: document.getElementById('item-flex-basis'),
  itemFlexOrder: document.getElementById('item-flex-order'),
  itemFlexAlignSelf: document.getElementById('item-flex-align-self'),
  
  // Workspace indicators
  activeModeBadge: document.getElementById('active-mode-badge'),
  canvasDimensions: document.getElementById('canvas-dimensions'),
  
  // Code & Copy
  copyCodeBtn: document.getElementById('copy-code-btn'),
  codeContent: document.getElementById('code-content'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message')
};

// --- Initialization ---
function init() {
  lucide.createIcons();
  bindEvents();
  render();
}

// --- Event Binding ---
function bindEvents() {
  // Mode switcher
  DOM.modeGridBtn.addEventListener('click', () => setMode('grid'));
  DOM.modeFlexBtn.addEventListener('click', () => setMode('flex'));
  
  // Presets dropdown toggle
  DOM.presetsMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.presetsDropdown.classList.toggle('hidden');
  });
  
  document.addEventListener('click', () => {
    DOM.presetsDropdown.classList.add('hidden');
  });
  
  // Preset selection
  document.querySelectorAll('.preset-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const presetName = btn.getAttribute('data-preset');
      applyPreset(presetName);
    });
  });

  // Reset Button
  DOM.resetLayoutBtn.addEventListener('click', resetLayout);
  
  // Grid Inputs Change
  DOM.gridColsInput.addEventListener('input', () => {
    const val = parseInt(DOM.gridColsInput.value) || 1;
    setGridColumnsCount(val);
  });
  DOM.gridRowsInput.addEventListener('input', () => {
    const val = parseInt(DOM.gridRowsInput.value) || 1;
    setGridRowsCount(val);
  });
  
  DOM.gridColGap.addEventListener('input', () => {
    state.grid.colGap = parseInt(DOM.gridColGap.value);
    DOM.gridColGapVal.innerText = `${state.grid.colGap}px`;
    render();
  });
  DOM.gridRowGap.addEventListener('input', () => {
    state.grid.rowGap = parseInt(DOM.gridRowGap.value);
    DOM.gridRowGapVal.innerText = `${state.grid.rowGap}px`;
    render();
  });
  DOM.gridPadding.addEventListener('input', () => {
    state.grid.padding = parseInt(DOM.gridPadding.value);
    DOM.gridPaddingVal.innerText = `${state.grid.padding}px`;
    render();
  });
  DOM.gridJustifyItems.addEventListener('change', () => {
    state.grid.justifyItems = DOM.gridJustifyItems.value;
    render();
  });
  DOM.gridAlignItems.addEventListener('change', () => {
    state.grid.alignItems = DOM.gridAlignItems.value;
    render();
  });

  // Flex Inputs Change
  DOM.flexGap.addEventListener('input', () => {
    state.flex.gap = parseInt(DOM.flexGap.value);
    DOM.flexGapVal.innerText = `${state.flex.gap}px`;
    render();
  });
  DOM.flexPadding.addEventListener('input', () => {
    state.flex.padding = parseInt(DOM.flexPadding.value);
    DOM.flexPaddingVal.innerText = `${state.flex.padding}px`;
    render();
  });
  
  DOM.flexDirectionSegment.addEventListener('click', (e) => {
    const btn = e.target.closest('.segment-btn');
    if (!btn) return;
    DOM.flexDirectionSegment.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.flex.direction = btn.getAttribute('data-value');
    render();
  });

  DOM.flexWrapSegment.addEventListener('click', (e) => {
    const btn = e.target.closest('.segment-btn');
    if (!btn) return;
    DOM.flexWrapSegment.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.flex.wrap = btn.getAttribute('data-value');
    render();
  });

  DOM.flexJustifyContent.addEventListener('change', () => {
    state.flex.justifyContent = DOM.flexJustifyContent.value;
    render();
  });
  DOM.flexAlignItems.addEventListener('change', () => {
    state.flex.alignItems = DOM.flexAlignItems.value;
    render();
  });
  DOM.flexAlignContent.addEventListener('change', () => {
    state.flex.alignContent = DOM.flexAlignContent.value;
    render();
  });

  // Stepper helper controls (+ / - buttons)
  document.querySelectorAll('.step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const action = btn.getAttribute('data-action');
      const input = document.getElementById(targetId);
      if (!input) return;
      
      let val = parseInt(input.value) || 0;
      if (action === 'inc') {
        val = Math.min(parseInt(input.max) || 999, val + 1);
      } else {
        val = Math.max(parseInt(input.min) || 0, val - 1);
      }
      input.value = val;
      input.dispatchEvent(new Event('input'));
    });
  });

  // Item Config Inputs
  DOM.itemColStart.addEventListener('input', () => {
    const item = getSelectedItem();
    if (!item) return;
    const start = Math.max(1, parseInt(DOM.itemColStart.value) || 1);
    const end = Math.max(start + 1, parseInt(DOM.itemColEnd.value) || start + 1);
    item.gridColumnStart = Math.min(state.grid.cols, start);
    item.gridColumnEnd = Math.min(state.grid.cols + 1, end);
    DOM.itemColStart.value = item.gridColumnStart;
    DOM.itemColEnd.value = item.gridColumnEnd;
    render();
  });

  DOM.itemColEnd.addEventListener('input', () => {
    const item = getSelectedItem();
    if (!item) return;
    const start = parseInt(DOM.itemColStart.value) || 1;
    const end = parseInt(DOM.itemColEnd.value) || (start + 1);
    if (end <= start) {
      item.gridColumnEnd = start + 1;
    } else {
      item.gridColumnEnd = Math.min(state.grid.cols + 1, end);
    }
    DOM.itemColEnd.value = item.gridColumnEnd;
    render();
  });

  DOM.itemRowStart.addEventListener('input', () => {
    const item = getSelectedItem();
    if (!item) return;
    const start = Math.max(1, parseInt(DOM.itemRowStart.value) || 1);
    const end = Math.max(start + 1, parseInt(DOM.itemRowEnd.value) || start + 1);
    item.gridRowStart = Math.min(state.grid.rows, start);
    item.gridRowEnd = Math.min(state.grid.rows + 1, end);
    DOM.itemRowStart.value = item.gridRowStart;
    DOM.itemRowEnd.value = item.gridRowEnd;
    render();
  });

  DOM.itemRowEnd.addEventListener('input', () => {
    const item = getSelectedItem();
    if (!item) return;
    const start = parseInt(DOM.itemRowStart.value) || 1;
    const end = parseInt(DOM.itemRowEnd.value) || (start + 1);
    if (end <= start) {
      item.gridRowEnd = start + 1;
    } else {
      item.gridRowEnd = Math.min(state.grid.rows + 1, end);
    }
    DOM.itemRowEnd.value = item.gridRowEnd;
    render();
  });

  DOM.itemGridJustifySelf.addEventListener('change', () => {
    const item = getSelectedItem();
    if (item) {
      item.justifySelf = DOM.itemGridJustifySelf.value;
      render();
    }
  });

  DOM.itemGridAlignSelf.addEventListener('change', () => {
    const item = getSelectedItem();
    if (item) {
      item.alignSelf = DOM.itemGridAlignSelf.value;
      render();
    }
  });

  // Flex Item Inputs
  DOM.itemFlexGrow.addEventListener('input', () => {
    const item = getSelectedItem();
    if (item) {
      item.flexGrow = parseInt(DOM.itemFlexGrow.value) || 0;
      render();
    }
  });

  DOM.itemFlexShrink.addEventListener('input', () => {
    const item = getSelectedItem();
    if (item) {
      item.flexShrink = parseInt(DOM.itemFlexShrink.value) || 0;
      render();
    }
  });

  DOM.itemFlexBasis.addEventListener('input', () => {
    const item = getSelectedItem();
    if (item) {
      item.flexBasis = DOM.itemFlexBasis.value || 'auto';
      render();
    }
  });

  DOM.itemFlexOrder.addEventListener('input', () => {
    const item = getSelectedItem();
    if (item) {
      item.order = parseInt(DOM.itemFlexOrder.value) || 0;
      render();
    }
  });

  DOM.itemFlexAlignSelf.addEventListener('change', () => {
    const item = getSelectedItem();
    if (item) {
      item.flexAlignSelf = DOM.itemFlexAlignSelf.value;
      render();
    }
  });

  // Add & Delete items
  DOM.addItemBtn.addEventListener('click', addNewItem);
  DOM.deleteItemBtn.addEventListener('click', deleteSelectedItem);
  
  // Canvas click handles (deselect when clicking blank areas)
  DOM.layoutCanvas.addEventListener('click', (e) => {
    if (e.target === DOM.layoutCanvas || e.target === DOM.itemsContainer || e.target === DOM.gridLinesOverlay) {
      selectItem(null);
    }
  });

  // Code Tab toggles
  document.querySelectorAll('.code-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCodeLang = tab.getAttribute('data-lang');
      updateCodeBlock();
    });
  });

  // Copy Code Button
  DOM.copyCodeBtn.addEventListener('click', copyCodeToClipboard);
  
  // Window resizing re-adjusts line resizers
  window.addEventListener('resize', updateGridLinesOverlay);
}

// --- Layout Modifiers ---
function setMode(mode) {
  state.mode = mode;
  DOM.activeModeBadge.innerText = mode === 'grid' ? 'Grid Mode' : 'Flexbox Mode';
  
  if (mode === 'grid') {
    DOM.modeGridBtn.classList.add('active');
    DOM.modeFlexBtn.classList.remove('active');
    DOM.gridControlsGroup.classList.remove('hidden');
    DOM.flexControlsGroup.classList.add('hidden');
    DOM.gridItemSettings.classList.remove('hidden');
    DOM.flexItemSettings.classList.add('hidden');
    DOM.layoutCanvas.classList.add('grid-mode-active');
    DOM.layoutCanvas.classList.remove('flex-mode-active');
  } else {
    DOM.modeGridBtn.classList.remove('active');
    DOM.modeFlexBtn.classList.add('active');
    DOM.gridControlsGroup.classList.add('hidden');
    DOM.flexControlsGroup.classList.remove('hidden');
    DOM.gridItemSettings.classList.add('hidden');
    DOM.flexItemSettings.classList.remove('hidden');
    DOM.layoutCanvas.classList.remove('grid-mode-active');
    DOM.layoutCanvas.classList.add('flex-mode-active');
  }
  
  // Re-sync UI inputs and values
  syncContainerInputs();
  render();
}

function syncContainerInputs() {
  if (state.mode === 'grid') {
    DOM.gridColsInput.value = state.grid.cols;
    DOM.gridRowsInput.value = state.grid.rows;
    DOM.gridColGap.value = state.grid.colGap;
    DOM.gridColGapVal.innerText = `${state.grid.colGap}px`;
    DOM.gridRowGap.value = state.grid.rowGap;
    DOM.gridRowGapVal.innerText = `${state.grid.rowGap}px`;
    DOM.gridPadding.value = state.grid.padding;
    DOM.gridPaddingVal.innerText = `${state.grid.padding}px`;
    DOM.gridJustifyItems.value = state.grid.justifyItems;
    DOM.gridAlignItems.value = state.grid.alignItems;
  } else {
    DOM.flexGap.value = state.flex.gap;
    DOM.flexGapVal.innerText = `${state.flex.gap}px`;
    DOM.flexPadding.value = state.flex.padding;
    DOM.flexPaddingVal.innerText = `${state.flex.padding}px`;
    DOM.flexJustifyContent.value = state.flex.justifyContent;
    DOM.flexAlignItems.value = state.flex.alignItems;
    DOM.flexAlignContent.value = state.flex.alignContent;
    
    // Segments
    DOM.flexDirectionSegment.querySelectorAll('.segment-btn').forEach(btn => {
      if (btn.getAttribute('data-value') === state.flex.direction) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    DOM.flexWrapSegment.querySelectorAll('.segment-btn').forEach(btn => {
      if (btn.getAttribute('data-value') === state.flex.wrap) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

function setGridColumnsCount(count) {
  const prevCols = state.grid.cols;
  state.grid.cols = count;
  
  // Readjust tracks percentages
  const tracks = [];
  const equalPct = (100 / count).toFixed(2) + '%';
  for (let i = 0; i < count; i++) {
    tracks.push(equalPct);
  }
  state.grid.columnTracks = tracks;
  
  // Make sure items bounds are valid
  state.items.forEach(item => {
    if (item.gridColumnStart > count) item.gridColumnStart = count;
    if (item.gridColumnEnd > count + 1) item.gridColumnEnd = count + 1;
    if (item.gridColumnStart >= item.gridColumnEnd) {
      item.gridColumnEnd = item.gridColumnStart + 1;
    }
  });
  
  render();
}

function setGridRowsCount(count) {
  const prevRows = state.grid.rows;
  state.grid.rows = count;
  
  // Readjust tracks percentages
  const tracks = [];
  const equalPct = (100 / count).toFixed(2) + '%';
  for (let i = 0; i < count; i++) {
    tracks.push(equalPct);
  }
  state.grid.rowTracks = tracks;
  
  // Make sure items bounds are valid
  state.items.forEach(item => {
    if (item.gridRowStart > count) item.gridRowStart = count;
    if (item.gridRowEnd > count + 1) item.gridRowEnd = count + 1;
    if (item.gridRowStart >= item.gridRowEnd) {
      item.gridRowEnd = item.gridRowStart + 1;
    }
  });
  
  render();
}

function selectItem(id) {
  state.selectedItemId = id;
  
  // Highlight items visually
  document.querySelectorAll('.layout-item').forEach(el => {
    if (el.getAttribute('data-id') === String(id)) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });

  if (id === null) {
    DOM.noItemSelectedMsg.classList.remove('hidden');
    DOM.itemSettingsPanel.classList.add('hidden');
  } else {
    DOM.noItemSelectedMsg.classList.add('hidden');
    DOM.itemSettingsPanel.classList.remove('hidden');
    
    const item = getSelectedItem();
    if (item) {
      DOM.selectedItemTitle.innerText = item.name;
      DOM.selectedItemColorBadge.className = `item-badge ${item.colorClass}`;
      
      // Update Grid settings inputs
      DOM.itemColStart.value = item.gridColumnStart;
      DOM.itemColEnd.value = item.gridColumnEnd;
      DOM.itemRowStart.value = item.gridRowStart;
      DOM.itemRowEnd.value = item.gridRowEnd;
      DOM.itemGridJustifySelf.value = item.justifySelf;
      DOM.itemGridAlignSelf.value = item.alignSelf;
      
      // Update Flex settings inputs
      DOM.itemFlexGrow.value = item.flexGrow;
      DOM.itemFlexShrink.value = item.flexShrink;
      DOM.itemFlexBasis.value = item.flexBasis;
      DOM.itemFlexOrder.value = item.order;
      DOM.itemFlexAlignSelf.value = item.flexAlignSelf;
    }
  }
}

function getSelectedItem() {
  return state.items.find(item => item.id === String(state.selectedItemId));
}

function addNewItem() {
  state.itemIdCounter++;
  const nextColorIndex = (state.itemIdCounter % 8) + 1;
  const newItem = {
    id: String(state.itemIdCounter),
    name: `Item ${state.itemIdCounter}`,
    colorClass: `c-${nextColorIndex}`,
    
    // Grid settings (spawn in bottom/right or center cell)
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 2,
    justifySelf: 'auto',
    alignSelf: 'auto',
    
    // Flex settings
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    order: 0,
    flexAlignSelf: 'auto',
    width: null,
    height: null
  };
  
  // Find a free single cell in grid if grid mode active
  if (state.mode === 'grid') {
    let placed = false;
    for (let r = 1; r <= state.grid.rows; r++) {
      for (let c = 1; c <= state.grid.cols; c++) {
        // Check if cell is fully occupied
        const occupied = state.items.some(item => 
          c >= item.gridColumnStart && c < item.gridColumnEnd && 
          r >= item.gridRowStart && r < item.gridRowEnd
        );
        if (!occupied) {
          newItem.gridColumnStart = c;
          newItem.gridColumnEnd = c + 1;
          newItem.gridRowStart = r;
          newItem.gridRowEnd = r + 1;
          placed = true;
          break;
        }
      }
      if (placed) break;
    }
  }
  
  state.items.push(newItem);
  render();
  selectItem(newItem.id);
  
  showToast(`Created ${newItem.name}`);
}

function deleteSelectedItem() {
  const item = getSelectedItem();
  if (!item) return;
  
  const name = item.name;
  state.items = state.items.filter(i => i.id !== item.id);
  selectItem(null);
  render();
  
  showToast(`Deleted ${name}`);
}

function applyPreset(name) {
  const preset = presets[name];
  if (!preset) return;
  
  state.mode = preset.mode;
  state.selectedItemId = null;
  state.itemIdCounter = preset.itemIdCounter;
  
  // Load mode settings
  if (preset.mode === 'grid') {
    state.grid = { ...state.grid, ...preset.grid };
  } else {
    state.flex = { ...state.flex, ...preset.flex };
  }
  
  // Deep clone items
  state.items = preset.items.map(item => ({
    // Defaults
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    order: 0,
    flexAlignSelf: 'auto',
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 2,
    justifySelf: 'auto',
    alignSelf: 'auto',
    // Injected
    ...item
  }));
  
  setMode(preset.mode);
  showToast(`Loaded ${name.replace('-', ' ')} preset`);
}

function resetLayout() {
  state.selectedItemId = null;
  state.items = [
    {
      id: '1', name: 'Item 1', colorClass: 'c-1',
      gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 2, justifySelf: 'auto', alignSelf: 'auto',
      flexGrow: 0, flexShrink: 1, flexBasis: 'auto', order: 0, flexAlignSelf: 'auto'
    },
    {
      id: '2', name: 'Item 2', colorClass: 'c-2',
      gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 2, justifySelf: 'auto', alignSelf: 'auto',
      flexGrow: 0, flexShrink: 1, flexBasis: 'auto', order: 0, flexAlignSelf: 'auto'
    },
    {
      id: '3', name: 'Item 3', colorClass: 'c-3',
      gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 2, justifySelf: 'auto', alignSelf: 'auto',
      flexGrow: 0, flexShrink: 1, flexBasis: 'auto', order: 0, flexAlignSelf: 'auto'
    }
  ];
  state.itemIdCounter = 3;
  
  if (state.mode === 'grid') {
    state.grid.cols = 3;
    state.grid.rows = 3;
    state.grid.columnTracks = ['33.33%', '33.33%', '33.33%'];
    state.grid.rowTracks = ['33.33%', '33.33%', '33.33%'];
    state.grid.colGap = 16;
    state.grid.rowGap = 16;
    state.grid.padding = 16;
    state.grid.justifyItems = 'stretch';
    state.grid.alignItems = 'stretch';
  } else {
    state.flex.direction = 'row';
    state.flex.wrap = 'nowrap';
    state.flex.gap = 16;
    state.flex.padding = 16;
    state.flex.justifyContent = 'flex-start';
    state.flex.alignItems = 'stretch';
    state.flex.alignContent = 'stretch';
  }
  
  syncContainerInputs();
  render();
  selectItem(null);
  showToast('Workspace reset');
}

// --- Resizing & Drag Logic ---

// Grid columns & rows divider track dragging
let dragSession = null;

function setupGridResizerDragging() {
  DOM.gridLinesOverlay.addEventListener('mousedown', (e) => {
    const handle = e.target.closest('.grid-resize-handle');
    if (!handle) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const index = parseInt(handle.getAttribute('data-index'));
    const type = handle.getAttribute('data-type'); // 'col' or 'row'
    
    const canvasRect = DOM.layoutCanvas.getBoundingClientRect();
    
    // Save starting dimensions
    let initialSizes = [];
    if (type === 'col') {
      initialSizes = state.grid.columnTracks.map(t => parseTrackPixelSize(t, canvasRect.width));
    } else {
      initialSizes = state.grid.rowTracks.map(t => parseTrackPixelSize(t, canvasRect.height));
    }
    
    dragSession = {
      type,
      index, // Index of track BEFORE the resizer handle
      initialX: e.clientX,
      initialY: e.clientY,
      initialSizes,
      canvasRect,
      totalTracksSize: initialSizes.reduce((a, b) => a + b, 0)
    };
    
    document.body.classList.add(type === 'col' ? 'dragging' : 'dragging-row');
    handle.classList.add('active');
    
    // Draw guide line
    drawDragGuide(type, e.clientX, e.clientY);
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!dragSession) return;
    
    const { type, index, initialX, initialY, initialSizes, canvasRect, totalTracksSize } = dragSession;
    
    if (type === 'col') {
      const deltaX = e.clientX - initialX;
      // Redistribute sizes between index and index+1
      let sizeA = initialSizes[index] + deltaX;
      let sizeB = initialSizes[index + 1] - deltaX;
      
      // Enforce min size (30px)
      if (sizeA < 30) {
        sizeA = 30;
        sizeB = initialSizes[index] + initialSizes[index + 1] - 30;
      }
      if (sizeB < 30) {
        sizeB = 30;
        sizeA = initialSizes[index] + initialSizes[index + 1] - 30;
      }
      
      const newSizes = [...initialSizes];
      newSizes[index] = sizeA;
      newSizes[index + 1] = sizeB;
      
      // Convert to percentages relative to total track sizes (excluding gaps)
      const percentages = newSizes.map(size => {
        return `${((size / totalTracksSize) * 100).toFixed(2)}%`;
      });
      
      state.grid.columnTracks = percentages;
      render();
      drawDragGuide('col', e.clientX, e.clientY);
    } else {
      const deltaY = e.clientY - initialY;
      // Redistribute sizes between index and index+1
      let sizeA = initialSizes[index] + deltaY;
      let sizeB = initialSizes[index + 1] - deltaY;
      
      // Enforce min size (30px)
      if (sizeA < 30) {
        sizeA = 30;
        sizeB = initialSizes[index] + initialSizes[index + 1] - 30;
      }
      if (sizeB < 30) {
        sizeB = 30;
        sizeA = initialSizes[index] + initialSizes[index + 1] - 30;
      }
      
      const newSizes = [...initialSizes];
      newSizes[index] = sizeA;
      newSizes[index + 1] = sizeB;
      
      // Convert to percentages
      const percentages = newSizes.map(size => {
        return `${((size / totalTracksSize) * 100).toFixed(2)}%`;
      });
      
      state.grid.rowTracks = percentages;
      render();
      drawDragGuide('row', e.clientX, e.clientY);
    }
  });
  
  document.addEventListener('mouseup', () => {
    if (!dragSession) return;
    
    document.body.classList.remove('dragging', 'dragging-row');
    document.querySelectorAll('.grid-resize-handle').forEach(h => h.classList.remove('active'));
    removeDragGuide();
    
    dragSession = null;
    updateCodeBlock();
  });
}

function parseTrackPixelSize(trackStr, parentPixels) {
  if (trackStr.endsWith('%')) {
    return (parseFloat(trackStr) / 100) * parentPixels;
  }
  if (trackStr.endsWith('px')) {
    return parseFloat(trackStr);
  }
  if (trackStr.endsWith('fr')) {
    // Treat as relative share
    return (parseFloat(trackStr) / 5) * parentPixels; // rough estimate, overridden during rendering
  }
  return parentPixels / 3;
}

function drawDragGuide(type, clientX, clientY) {
  removeDragGuide();
  
  const guide = document.createElement('div');
  guide.className = `grid-drag-guide ${type === 'col' ? 'vertical' : 'horizontal'}`;
  
  const canvasRect = DOM.layoutCanvas.getBoundingClientRect();
  
  if (type === 'col') {
    const localX = clientX - canvasRect.left;
    guide.style.left = `${localX}px`;
  } else {
    const localY = clientY - canvasRect.top;
    guide.style.top = `${localY}px`;
  }
  
  DOM.layoutCanvas.appendChild(guide);
}

function removeDragGuide() {
  const guide = DOM.layoutCanvas.querySelector('.grid-drag-guide');
  if (guide) guide.remove();
}

// Drag & Drop / span resize for layout items inside Grid Mode
function setupItemDragging() {
  DOM.itemsContainer.addEventListener('mousedown', (e) => {
    // 1. Grid Span Resize handles
    const spanHandle = e.target.closest('.span-handle');
    if (spanHandle && state.mode === 'grid') {
      e.preventDefault();
      e.stopPropagation();
      
      const itemEl = spanHandle.closest('.layout-item');
      const itemId = itemEl.getAttribute('data-id');
      const direction = spanHandle.classList.contains('right') ? 'cols' : 'rows';
      
      selectItem(itemId);
      startSpanResize(itemId, direction, e);
      return;
    }
    
    // 2. Dragging Item to Move Cell positions
    const itemEl = e.target.closest('.layout-item');
    if (itemEl) {
      const itemId = itemEl.getAttribute('data-id');
      selectItem(itemId);
      
      if (state.mode === 'grid') {
        e.preventDefault();
        startItemMove(itemId, e);
      } else if (state.mode === 'flex') {
        // Flexbox item basis resizing via right-border drag handle
        const rect = itemEl.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        
        // If user clicks within 15px of right border, let them resize flex-basis
        if (rect.right - e.clientX < 15) {
          e.preventDefault();
          e.stopPropagation();
          startFlexBasisResize(itemId, e);
        }
      }
    }
  });
}

// Resizing grid item columns/rows span
function startSpanResize(itemId, dimension, startEvent) {
  const item = state.items.find(i => i.id === itemId);
  if (!item) return;
  
  const startX = startEvent.clientX;
  const startY = startEvent.clientY;
  
  const gridCells = getGridCellCoordinates();
  
  const initialEnd = dimension === 'cols' ? item.gridColumnEnd : item.gridRowEnd;
  const startIdx = dimension === 'cols' ? item.gridColumnStart : item.gridRowStart;
  
  function onMouseMove(e) {
    const mouseCoord = dimension === 'cols' ? e.clientX : e.clientY;
    const array = dimension === 'cols' ? gridCells.cols : gridCells.rows;
    
    // Find closest cell coordinate corresponding to mouseCoord
    let closestIndex = startIdx + 1;
    let minDist = Infinity;
    
    for (let k = startIdx; k < array.length; k++) {
      const dist = Math.abs(mouseCoord - array[k].end);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = k + 1;
      }
    }
    
    if (dimension === 'cols') {
      item.gridColumnEnd = Math.max(startIdx + 1, Math.min(state.grid.cols + 1, closestIndex));
      DOM.itemColEnd.value = item.gridColumnEnd;
    } else {
      item.gridRowEnd = Math.max(startIdx + 1, Math.min(state.grid.rows + 1, closestIndex));
      DOM.itemRowEnd.value = item.gridRowEnd;
    }
    
    render();
  }
  
  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    updateCodeBlock();
  }
  
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// Dragging item to move its starting grid coordinates
function startItemMove(itemId, startEvent) {
  const item = state.items.find(i => i.id === itemId);
  if (!item) return;
  
  const colSpan = item.gridColumnEnd - item.gridColumnStart;
  const rowSpan = item.gridRowEnd - item.gridRowStart;
  
  const gridCells = getGridCellCoordinates();
  
  function onMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Find which cell the cursor is currently hovering over
    let hoverCol = 1;
    let hoverRow = 1;
    
    gridCells.cols.forEach((col, idx) => {
      if (mouseX >= col.start && mouseX <= col.end) {
        hoverCol = idx + 1;
      }
    });
    if (mouseX > gridCells.cols[gridCells.cols.length - 1].end) {
      hoverCol = state.grid.cols;
    }
    
    gridCells.rows.forEach((row, idx) => {
      if (mouseY >= row.start && mouseY <= row.end) {
        hoverRow = idx + 1;
      }
    });
    if (mouseY > gridCells.rows[gridCells.rows.length - 1].end) {
      hoverRow = state.grid.rows;
    }
    
    // Update start/end coordinates ensuring they remain inside grid bounds
    const newColStart = Math.min(state.grid.cols - colSpan + 1, hoverCol);
    item.gridColumnStart = Math.max(1, newColStart);
    item.gridColumnEnd = item.gridColumnStart + colSpan;
    
    const newRowStart = Math.min(state.grid.rows - rowSpan + 1, hoverRow);
    item.gridRowStart = Math.max(1, newRowStart);
    item.gridRowEnd = item.gridRowStart + rowSpan;
    
    // Update UI inputs
    DOM.itemColStart.value = item.gridColumnStart;
    DOM.itemColEnd.value = item.gridColumnEnd;
    DOM.itemRowStart.value = item.gridRowStart;
    DOM.itemRowEnd.value = item.gridRowEnd;
    
    render();
  }
  
  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    updateCodeBlock();
  }
  
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// Resizing flex item's basis size
function startFlexBasisResize(itemId, startEvent) {
  const item = state.items.find(i => i.id === itemId);
  if (!item) return;
  
  const startX = startEvent.clientX;
  const initialWidth = startEvent.target.getBoundingClientRect().width;
  
  function onMouseMove(e) {
    const deltaX = e.clientX - startX;
    const newWidth = Math.max(50, initialWidth + deltaX);
    
    item.flexBasis = `${Math.round(newWidth)}px`;
    DOM.itemFlexBasis.value = item.flexBasis;
    render();
  }
  
  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    updateCodeBlock();
  }
  
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// Helper to get exact screen coordinates of columns & rows
function getGridCellCoordinates() {
  const cols = [];
  const rows = [];
  const cells = DOM.layoutCanvas.querySelectorAll('.grid-bg-cell');
  
  cells.forEach(cell => {
    const r = parseInt(cell.getAttribute('data-row'));
    const c = parseInt(cell.getAttribute('data-col'));
    const rect = cell.getBoundingClientRect();
    
    if (r === 1) {
      cols[c - 1] = { start: rect.left, end: rect.right, width: rect.width };
    }
    if (c === 1) {
      rows[r - 1] = { start: rect.top, end: rect.bottom, height: rect.height };
    }
  });
  
  return { cols, rows };
}

// --- Render Layout Workspace ---
function render() {
  // 1. Sync canvas display styles
  if (state.mode === 'grid') {
    DOM.layoutCanvas.style.display = 'grid';
    DOM.layoutCanvas.style.gridTemplateColumns = state.grid.columnTracks.join(' ');
    DOM.layoutCanvas.style.gridTemplateRows = state.grid.rowTracks.join(' ');
    DOM.layoutCanvas.style.columnGap = `${state.grid.colGap}px`;
    DOM.layoutCanvas.style.rowGap = `${state.grid.rowGap}px`;
    DOM.layoutCanvas.style.padding = `${state.grid.padding}px`;
    DOM.layoutCanvas.style.justifyItems = state.grid.justifyItems;
    DOM.layoutCanvas.style.alignItems = state.grid.alignItems;
    
    // Clear flex specific inline styles
    DOM.layoutCanvas.style.flexDirection = '';
    DOM.layoutCanvas.style.flexWrap = '';
    DOM.layoutCanvas.style.justifyContent = '';
    DOM.layoutCanvas.style.alignContent = '';
  } else {
    DOM.layoutCanvas.style.display = 'flex';
    DOM.layoutCanvas.style.flexDirection = state.flex.direction;
    DOM.layoutCanvas.style.flexWrap = state.flex.wrap;
    DOM.layoutCanvas.style.gap = `${state.flex.gap}px`;
    DOM.layoutCanvas.style.padding = `${state.flex.padding}px`;
    DOM.layoutCanvas.style.justifyContent = state.flex.justifyContent;
    DOM.layoutCanvas.style.alignItems = state.flex.alignItems;
    DOM.layoutCanvas.style.alignContent = state.flex.alignContent;
    
    // Clear grid specific styles
    DOM.layoutCanvas.style.gridTemplateColumns = '';
    DOM.layoutCanvas.style.gridTemplateRows = '';
    DOM.layoutCanvas.style.columnGap = '';
    DOM.layoutCanvas.style.rowGap = '';
    DOM.layoutCanvas.style.justifyItems = '';
  }

  // 2. Render Virtual grid bg cells & grid resizer handles
  renderGridBackgroundAndResizers();
  
  // 3. Render Canvas Child Items
  DOM.itemsContainer.innerHTML = '';
  state.items.forEach(item => {
    const el = document.createElement('div');
    el.className = `layout-item ${item.colorClass}`;
    el.setAttribute('data-id', item.id);
    
    // Item label
    const label = document.createElement('span');
    label.className = 'item-label';
    label.innerText = item.name;
    el.appendChild(label);
    
    // Item details / span dimensions info
    const sub = document.createElement('span');
    sub.className = 'item-span-text';
    
    if (state.mode === 'grid') {
      const colSpan = item.gridColumnEnd - item.gridColumnStart;
      const rowSpan = item.gridRowEnd - item.gridRowStart;
      sub.innerText = `c: ${item.gridColumnStart}/${item.gridColumnEnd} | r: ${item.gridRowStart}/${item.gridRowEnd}`;
      
      // Inline styles for grid placement
      el.style.gridColumnStart = item.gridColumnStart;
      el.style.gridColumnEnd = item.gridColumnEnd;
      el.style.gridRowStart = item.gridRowStart;
      el.style.gridRowEnd = item.gridRowEnd;
      el.style.justifySelf = item.justifySelf;
      el.style.alignSelf = item.alignSelf;
      
      // Remove flex styles
      el.style.flexGrow = '';
      el.style.flexShrink = '';
      el.style.flexBasis = '';
      el.style.order = '';
      
      // Add span resizer handle anchors
      const rHandle = document.createElement('div');
      rHandle.className = 'span-handle right';
      const bHandle = document.createElement('div');
      bHandle.className = 'span-handle bottom';
      
      el.appendChild(rHandle);
      el.appendChild(bHandle);
    } else {
      sub.innerText = `grow: ${item.flexGrow} | basis: ${item.flexBasis}`;
      
      // Inline styles for flex child
      el.style.flexGrow = item.flexGrow;
      el.style.flexShrink = item.flexShrink;
      el.style.flexBasis = item.flexBasis;
      el.style.order = item.order;
      el.style.alignSelf = item.flexAlignSelf;
      
      // Clear grid styles
      el.style.gridColumnStart = '';
      el.style.gridColumnEnd = '';
      el.style.gridRowStart = '';
      el.style.gridRowEnd = '';
    }
    
    el.appendChild(sub);
    
    // Selection state border check
    if (String(state.selectedItemId) === String(item.id)) {
      el.classList.add('selected');
    }
    
    DOM.itemsContainer.appendChild(el);
  });
  
  // Re-display track resize handles coordinates
  setTimeout(updateGridLinesOverlay, 10);
  
  // Update generated code block
  updateCodeBlock();
  
  // Update info size dimensions
  const rect = DOM.layoutCanvas.getBoundingClientRect();
  DOM.canvasDimensions.innerText = `Container Size: ${Math.round(rect.width)}px × ${Math.round(rect.height)}px`;
}

// Renders the dashed outline background cells for blueprint effect
function renderGridBackgroundAndResizers() {
  // Clear overlay
  DOM.gridLinesOverlay.innerHTML = '';
  
  if (state.mode !== 'grid') return;
  
  // 1. Render virtual background cells for layout alignment reference
  for (let r = 1; r <= state.grid.rows; r++) {
    for (let c = 1; c <= state.grid.cols; c++) {
      const bgCell = document.createElement('div');
      bgCell.className = 'grid-bg-cell';
      bgCell.style.gridColumn = c;
      bgCell.style.gridRow = r;
      bgCell.style.border = '1px dashed rgba(255,255,255,0.06)';
      bgCell.style.pointerEvents = 'none';
      bgCell.setAttribute('data-col', c);
      bgCell.setAttribute('data-row', r);
      DOM.gridLinesOverlay.appendChild(bgCell);
    }
  }
}

// Dynamically positions column & row resize handles along the gaps between cells
function updateGridLinesOverlay() {
  if (state.mode !== 'grid') return;
  
  // Remove existing resize handles
  DOM.gridLinesOverlay.querySelectorAll('.grid-resize-handle').forEach(h => h.remove());
  
  const cells = getGridCellCoordinates();
  const canvasRect = DOM.layoutCanvas.getBoundingClientRect();
  
  // 1. Column track resizer handles
  for (let i = 0; i < state.grid.cols - 1; i++) {
    if (!cells.cols[i] || !cells.cols[i + 1]) continue;
    
    const handle = document.createElement('div');
    handle.className = 'grid-resize-handle col-handle';
    handle.setAttribute('data-index', i);
    handle.setAttribute('data-type', 'col');
    
    const leftPx = (cells.cols[i].end + cells.cols[i + 1].start) / 2 - canvasRect.left;
    handle.style.left = `${leftPx}px`;
    
    DOM.gridLinesOverlay.appendChild(handle);
  }
  
  // 2. Row track resizer handles
  for (let j = 0; j < state.grid.rows - 1; j++) {
    if (!cells.rows[j] || !cells.rows[j + 1]) continue;
    
    const handle = document.createElement('div');
    handle.className = 'grid-resize-handle row-handle';
    handle.setAttribute('data-index', j);
    handle.setAttribute('data-type', 'row');
    
    const topPx = (cells.rows[j].end + cells.rows[j + 1].start) / 2 - canvasRect.top;
    handle.style.top = `${topPx}px`;
    
    DOM.gridLinesOverlay.appendChild(handle);
  }
}

// --- Live CSS/HTML Code Generation ---
function updateCodeBlock() {
  let code = '';
  
  if (state.activeCodeLang === 'css') {
    code = generateCSS();
  } else {
    code = generateHTML();
  }
  
  // Syntax highlight output
  DOM.codeContent.innerHTML = syntaxHighlight(code, state.activeCodeLang);
}

function generateCSS() {
  let css = '';
  
  if (state.mode === 'grid') {
    css += `/* CSS Grid Layout Container */\n`;
    css += `.layout-container {\n`;
    css += `  display: grid;\n`;
    css += `  grid-template-columns: ${state.grid.columnTracks.join(' ')};\n`;
    css += `  grid-template-rows: ${state.grid.rowTracks.join(' ')};\n`;
    css += `  column-gap: ${state.grid.colGap}px;\n`;
    css += `  row-gap: ${state.grid.rowGap}px;\n`;
    css += `  padding: ${state.grid.padding}px;\n`;
    if (state.grid.justifyItems !== 'stretch') {
      css += `  justify-items: ${state.grid.justifyItems};\n`;
    }
    if (state.grid.alignItems !== 'stretch') {
      css += `  align-items: ${state.grid.alignItems};\n`;
    }
    css += `  background-color: #0f172a;\n`;
    css += `  border-radius: 12px;\n`;
    css += `}\n\n`;
    
    css += `/* Common item styles */\n`;
    css += `.layout-item {\n`;
    css += `  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);\n`;
    css += `  border: 1px solid #334155;\n`;
    css += `  border-radius: 8px;\n`;
    css += `  padding: 16px;\n`;
    css += `  color: #f8fafc;\n`;
    css += `}\n\n`;
    
    // Item specific styles
    state.items.forEach(item => {
      css += `/* ${item.name} CSS Placement */\n`;
      css += `.item-${item.id} {\n`;
      css += `  grid-column: ${item.gridColumnStart} / ${item.gridColumnEnd};\n`;
      css += `  grid-row: ${item.gridRowStart} / ${item.gridRowEnd};\n`;
      if (item.justifySelf !== 'auto') {
        css += `  justify-self: ${item.justifySelf};\n`;
      }
      if (item.alignSelf !== 'auto') {
        css += `  align-self: ${item.alignSelf};\n`;
      }
      css += `}\n\n`;
    });
  } else {
    css += `/* Flexbox Layout Container */\n`;
    css += `.layout-container {\n`;
    css += `  display: flex;\n`;
    css += `  flex-direction: ${state.flex.direction};\n`;
    css += `  flex-wrap: ${state.flex.wrap};\n`;
    css += `  gap: ${state.flex.gap}px;\n`;
    css += `  padding: ${state.flex.padding}px;\n`;
    css += `  justify-content: ${state.flex.justifyContent};\n`;
    css += `  align-items: ${state.flex.alignItems};\n`;
    if (state.flex.alignContent !== 'stretch') {
      css += `  align-content: ${state.flex.alignContent};\n`;
    }
    css += `  background-color: #0f172a;\n`;
    css += `  border-radius: 12px;\n`;
    css += `}\n\n`;
    
    css += `/* Common item styles */\n`;
    css += `.layout-item {\n`;
    css += `  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);\n`;
    css += `  border: 1px solid #334155;\n`;
    css += `  border-radius: 8px;\n`;
    css += `  padding: 16px;\n`;
    css += `  color: #f8fafc;\n`;
    css += `}\n\n`;
    
    state.items.forEach(item => {
      css += `/* ${item.name} Flex Sizing */\n`;
      css += `.item-${item.id} {\n`;
      css += `  flex-grow: ${item.flexGrow};\n`;
      css += `  flex-shrink: ${item.flexShrink};\n`;
      css += `  flex-basis: ${item.flexBasis};\n`;
      if (item.order !== 0) {
        css += `  order: ${item.order};\n`;
      }
      if (item.flexAlignSelf !== 'auto') {
        css += `  align-self: ${item.flexAlignSelf};\n`;
      }
      css += `}\n\n`;
    });
  }
  
  return css.trim();
}

function generateHTML() {
  let html = `<!-- HTML Layout Container -->\n`;
  html += `<div class="layout-container">\n`;
  
  state.items.forEach(item => {
    html += `  <div class="layout-item item-${item.id}">\n`;
    html += `    <h3>${item.name}</h3>\n`;
    html += `  </div>\n`;
  });
  
  html += `</div>`;
  return html;
}

// Simple highlighter
function syntaxHighlight(code, lang) {
  // Escape HTML characters
  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    
  if (lang === 'css') {
    // Comments
    escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');
    // Selectors
    escaped = escaped.replace(/(\.[a-zA-Z0-9_\-]+)\s*\{/g, '<span class="tag">$1</span> {');
    // Properties
    escaped = escaped.replace(/([a-zA-Z0-9\-]+)\s*:/g, '<span class="property">$1</span>:');
    // Values
    escaped = escaped.replace(/:\s*([^;\}]+);/g, ': <span class="value">$1</span>;');
  } else {
    // HTML tags
    escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9\-]+)/g, '<span class="keyword">$1</span>');
    escaped = escaped.replace(/(\s[a-zA-Z\-]+=)/g, '<span class="property">$1</span>');
    escaped = escaped.replace(/(".*?")/g, '<span class="value">$1</span>');
    // Comments
    escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="comment">$1</span>');
  }
  
  return escaped;
}

// --- Copy & Toast Utility ---
function copyCodeToClipboard() {
  let text = '';
  if (state.activeCodeLang === 'css') {
    text = generateCSS();
  } else {
    text = generateHTML();
  }
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('Code copied to clipboard!');
  }).catch(() => {
    showToast('Failed to copy code.', true);
  });
}

function showToast(message, isError = false) {
  DOM.toastMessage.innerText = message;
  DOM.toast.className = 'toast';
  if (isError) {
    DOM.toast.classList.add('error');
    // Switch icon class if we wanted, but keep it clean
  }
  DOM.toast.classList.remove('hidden');
  
  setTimeout(() => {
    DOM.toast.classList.add('hidden');
  }, 2500);
}

// Setup handlers on start
setupGridResizerDragging();
setupItemDragging();

// Launch Studio
window.addEventListener('DOMContentLoaded', init);
