/**
 * Performance monitoring utility for tracking application load times and chunk loading
 * Uses the Browser's Performance API to measure various metrics
 */
export function initializePerformanceMonitoring() {
  const ENV = process.env.NODE_ENV;
  console.log('Current environment:', ENV);

  if (ENV === 'development' || ENV === 'production') {
    // Start tracking application initialization
    markApplicationStart();
    
    // Set up monitoring for dynamic chunk loading
    setupChunkLoadingMonitor();
    
    // Monitor overall application load completion
    setupLoadCompletionMonitor();
  }
}

/**
 * Creates initial timestamp for application start
 */
function markApplicationStart() {
  try {
    performance.mark('app-start');
  } catch (error) {
    console.warn('Failed to create performance mark for app start:', error);
  }
}

/**
 * Monitors the loading time of dynamic chunks (lazy-loaded components/routes)
 */
function setupChunkLoadingMonitor() {
  try {
    const originalViteLoader = window.__vite_is_modern_browser;
    
    // Wrap the original Vite loader with performance monitoring
    window.__vite_is_modern_browser = function monitorChunkLoad(chunkId) {
      // Mark the start of chunk loading
      performance.mark(`chunk-request-start-${chunkId}`);
      
      return originalViteLoader.apply(this, arguments)
        .then((loadedChunk) => {
          // Mark and measure chunk loading completion
          performance.mark(`chunk-request-end-${chunkId}`);
          measureChunkLoadTime(chunkId);
          return loadedChunk;
        })
        .catch((error) => {
          console.error(`Failed to load chunk ${chunkId}:`, error);
          throw error;
        });
    };
  } catch (error) {
    console.warn('Failed to setup chunk loading monitor:', error);
  }
}

/**
 * Measures the time taken to load a specific chunk
 * @param {string} chunkId - The identifier of the loaded chunk
 */
function measureChunkLoadTime(chunkId) {
  try {
    performance.measure(
      `chunk-request-${chunkId}`,
      `chunk-request-start-${chunkId}`,
      `chunk-request-end-${chunkId}`
    );
  } catch (error) {
    console.warn(`Failed to measure chunk load time for ${chunkId}:`, error);
  }
}

/**
 * Monitors and reports the overall application load completion
 */
function setupLoadCompletionMonitor() {
  window.addEventListener('load', () => {
    try {
      // Mark application load completion
      performance.mark('app-loaded');
      
      // Measure total load time
      performance.measure('total-load-time', 'app-start', 'app-loaded');
      
      // Generate and display performance report
      displayPerformanceReport();
    } catch (error) {
      console.warn('Failed to measure total load time:', error);
    }
  });
}

/**
 * Generates and displays a formatted performance report
 */
function displayPerformanceReport() {
  try {
    const performanceMeasures = performance.getEntriesByType('measure');
    const formattedMeasures = performanceMeasures.map(measure => ({
      name: formatMeasureName(measure.name),
      duration: formatDuration(measure.duration)
    }));

    console.table(formattedMeasures);
  } catch (error) {
    console.warn('Failed to display performance report:', error);
  }
}

/**
 * Formats a performance measure name for better readability
 * @param {string} name - Raw measure name
 * @returns {string} Formatted measure name
 */
function formatMeasureName(name) {
  return name.replace(/-/g, ' ').replace(/chunk request/g, 'Module Load:');
}

/**
 * Formats duration in milliseconds with fixed precision
 * @param {number} duration - Duration in milliseconds
 * @returns {string} Formatted duration string
 */
function formatDuration(duration) {
  return `${duration.toFixed(2)}ms`;
}