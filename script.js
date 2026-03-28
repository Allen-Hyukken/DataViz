// Linear Data Structures Configuration
const linearDataStructures = [
    {
        name: 'Array',
        icon: '📊',
        description: 'A collection of elements stored at contiguous memory locations, allowing fast random access using indices.',
        complexity: {
            access: 'O(1)',
            search: 'O(n)',
            insert: 'O(n)',
            delete: 'O(n)'
        },
        videoPath: 'videos/data_structures/linear/array.mp4'
    },
    {
        name: 'List',
        icon: '📝',
        description: 'A dynamic, ordered collection of elements that can grow or shrink in size, providing flexible storage.',
        complexity: {
            access: 'O(1)',
            search: 'O(n)',
            insert: 'O(1)',
            delete: 'O(1)'
        },
        videoPath: 'videos/data_structures/linear/list.mp4'
    },
    {
        name: 'Singly Linked List',
        icon: '🔗',
        description: 'A linear data structure where each node contains data and a reference to the next node in the sequence.',
        complexity: {
            access: 'O(n)',
            search: 'O(n)',
            insert: 'O(1)',
            delete: 'O(1)'
        },
        videoPath: 'videos/data_structures/linear/singly-linked-list.mp4'
    },
    {
        name: 'Doubly Linked List',
        icon: '⇄',
        description: 'A linked list where each node has references to both the next and previous nodes, allowing bidirectional traversal.',
        complexity: {
            access: 'O(n)',
            search: 'O(n)',
            insert: 'O(1)',
            delete: 'O(1)'
        },
        videoPath: 'videos/data_structures/linear/doubly-linked-list.mp4'
    },
    {
        name: 'Circular Singly Linked List',
        icon: '🔄',
        description: 'A singly linked list where the last node points back to the first node, forming a circular structure.',
        complexity: {
            access: 'O(n)',
            search: 'O(n)',
            insert: 'O(1)',
            delete: 'O(1)'
        },
        videoPath: 'videos/data_structures/linear/circular-singly-linked-list.mp4'
    },
    {
        name: 'Circular Doubly Linked List',
        icon: '↻',
        description: 'A doubly linked list where the last node points to the first and the first points back to the last, forming a circular structure.',
        complexity: {
            access: 'O(n)',
            search: 'O(n)',
            insert: 'O(1)',
            delete: 'O(1)'
        },
        videoPath: 'videos/data_structures/linear/circular-doubly-linked-list.mp4'
    },
    {
        name: 'Stack',
        icon: '📚',
        description: 'A Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end.',
        complexity: {
            push: 'O(1)',
            pop: 'O(1)',
            peek: 'O(1)',
            search: 'O(n)'
        },
        videoPath: 'videos/data_structures/linear/stack.mp4'
    },
    {
        name: 'Queue',
        icon: '🎫',
        description: 'A First-In-First-Out (FIFO) data structure where elements are added at the rear and removed from the front.',
        complexity: {
            enqueue: 'O(1)',
            dequeue: 'O(1)',
            peek: 'O(1)',
            search: 'O(n)'
        },
        videoPath: 'videos/data_structures/linear/queue.mp4'
    },
    {
        name: 'Map / Dictionary',
        icon: '🗂️',
        description: 'A collection of key-value pairs where each key is unique, providing fast lookup, insertion, and deletion operations.',
        complexity: {
            search: 'O(1)',
            insert: 'O(1)',
            delete: 'O(1)',
            access: 'O(1)'
        },
        videoPath: 'videos/data_structures/linear/map-dictionary.mp4'
    },
    {
        name: 'Tuple',
        icon: '📦',
        description: 'An immutable, ordered collection of elements that can contain different data types, commonly used for fixed data groupings.',
        complexity: {
            access: 'O(1)',
            search: 'O(n)',
            insert: 'N/A',
            delete: 'N/A'
        },
        videoPath: 'videos/data_structures/linear/tuple.mp4'
    },
    {
        name: 'Matrix',
        icon: '⊞',
        description: 'A two-dimensional array organized in rows and columns, used for representing grids, mathematical operations, and multidimensional data.',
        complexity: {
            access: 'O(1)',
            search: 'O(n×m)',
            insert: 'O(n×m)',
            delete: 'O(n×m)'
        },
        videoPath: 'videos/data_structures/linear/matrix.mp4'
    }
];

// Non-Linear Data Structures Configuration
const nonLinearDataStructures = [
    {
        name: 'General Tree',
        icon: '🌳',
        description: 'A hierarchical data structure where each node can have zero or more children. The topmost node is the root, and nodes with no children are leaves.',
        complexity: {
            access: 'O(n)',
            search: 'O(n)',
            insert: 'O(1)',
            delete: 'O(n)'
        },
        videoPath: 'videos/data_structures/non-linear/general-tree.mp4'
    },
    {
        name: 'Binary Tree',
        icon: '🌿',
        description: 'A tree where each node has at most two children, referred to as the left child and the right child. Forms the basis for many advanced data structures.',
        complexity: {
            access: 'O(n)',
            search: 'O(n)',
            insert: 'O(n)',
            delete: 'O(n)'
        },
        videoPath: 'videos/data_structures/non-linear/binary-tree.mp4'
    },
    {
        name: 'Binary Search Tree',
        icon: '🔍',
        description: 'A binary tree where each node\'s left subtree contains only nodes with values less than the node, and the right subtree only nodes with greater values.',
        complexity: {
            access: 'O(log n)',
            search: 'O(log n)',
            insert: 'O(log n)',
            delete: 'O(log n)'
        },
        videoPath: 'videos/data_structures/non-linear/binary-search-tree.mp4'
    },
    {
        name: 'Heap Tree',
        icon: '⛰️',
        description: 'A complete binary tree satisfying the heap property: in a max-heap every parent is greater than its children; in a min-heap every parent is smaller.',
        complexity: {
            access: 'O(1)',
            search: 'O(n)',
            insert: 'O(log n)',
            delete: 'O(log n)'
        },
        videoPath: 'videos/data_structures/non-linear/heap-tree.mp4'
    },
    {
        name: 'Graph',
        icon: '🕸️',
        description: 'A non-linear structure consisting of vertices (nodes) connected by edges. Models complex relationships like networks, maps, and social connections.',
        complexity: {
            search: 'O(V+E)',
            insert: 'O(1)',
            delete: 'O(V+E)',
            space: 'O(V+E)'
        },
        videoPath: 'videos/data_structures/non-linear/graph.mp4'
    }
];

// Sorting Algorithms Configuration
const sortingAlgorithms = [
    {
        name: 'Bubble Sort',
        icon: '🫧',
        description: 'A simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
        complexity: {
            best: 'O(n)',
            average: 'O(n²)',
            worst: 'O(n²)',
            space: 'O(1)'
        },
        videoPath: 'videos/algorithms/sort/bubble-sort.mp4'
    },
    {
        name: 'Selection Sort',
        icon: '🎯',
        description: 'Divides the array into sorted and unsorted regions, repeatedly selecting the minimum element from the unsorted region and placing it at the beginning.',
        complexity: {
            best: 'O(n²)',
            average: 'O(n²)',
            worst: 'O(n²)',
            space: 'O(1)'
        },
        videoPath: 'videos/algorithms/sort/selection-sort.mp4'
    },
    {
        name: 'Insertion Sort',
        icon: '🃏',
        description: 'Builds the final sorted array one item at a time by picking each element and inserting it into its correct position within the already-sorted portion.',
        complexity: {
            best: 'O(n)',
            average: 'O(n²)',
            worst: 'O(n²)',
            space: 'O(1)'
        },
        videoPath: 'videos/algorithms/sort/insertion-sort.mp4'
    },
];

// Searching Algorithms Configuration
const searchingAlgorithms = [
    {
        name: 'Linear Search',
        icon: '🔎',
        description: 'The simplest search algorithm that checks every element in the list sequentially until the target value is found or the list is exhausted.',
        complexity: {
            best: 'O(1)',
            average: 'O(n)',
            worst: 'O(n)',
            space: 'O(1)'
        },
        videoPath: 'videos/algorithms/search/linear-search.mp4'
    },
    {
        name: 'Binary Search',
        icon: '🎲',
        description: 'An efficient search algorithm on sorted arrays that repeatedly halves the search space by comparing the target to the middle element.',
        complexity: {
            best: 'O(1)',
            average: 'O(log n)',
            worst: 'O(log n)',
            space: 'O(1)'
        },
        videoPath: 'videos/algorithms/search/binary-search.mp4'
    },
    {
        name: 'Exponential Search',
        icon: '📈',
        description: 'Finds the range where a target may exist by doubling the index exponentially, then applies binary search within that range. Works on unbounded or very large sorted arrays.',
        complexity: {
            best: 'O(1)',
            average: 'O(log n)',
            worst: 'O(log n)',
            space: 'O(1)'
        },
        videoPath: 'videos/algorithms/search/exponential-search.mp4'
    },
    {
        name: 'Jump Search',
        icon: '🦘',
        description: 'Searches a sorted array by jumping ahead a fixed number of steps (√n) to find the block where the target lies, then performs a linear search within that block.',
        complexity: {
            best: 'O(1)',
            average: 'O(√n)',
            worst: 'O(√n)',
            space: 'O(1)'
        },
        videoPath: 'videos/algorithms/search/jump-search.mp4'
    }
];

// Generate Visualization Cards with Videos
function generateCards() {
    // Generate linear data structure cards
    const linearGrid = document.getElementById('linearGrid');
    generateCategoryCards(linearDataStructures, linearGrid);
    
    // Generate non-linear data structure cards
    const nonLinearGrid = document.getElementById('nonLinearGrid');
    if (nonLinearDataStructures.length > 0) {
        generateCategoryCards(nonLinearDataStructures, nonLinearGrid);
    } else {
        nonLinearGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--text-secondary);">
                <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;">🔨</div>
                <h3 style="font-size: 1.5rem; font-weight: 300; letter-spacing: 2px; margin-bottom: 1rem;">Coming Soon</h3>
                <p style="font-size: 1rem; letter-spacing: 1px;">Non-linear data structures will be added here</p>
            </div>
        `;
    }

    // Generate algorithms cards
    const sortingGrid = document.getElementById('sortingGrid');
    if (sortingGrid) {
        generateCategoryCards(sortingAlgorithms, sortingGrid);
    }

    const searchingGrid = document.getElementById('searchingGrid');
    if (searchingGrid) {
        generateCategoryCards(searchingAlgorithms, searchingGrid);
    }
}

function generateCategoryCards(dataStructures, gridElement) {
    dataStructures.forEach((ds, index) => {
        const card = document.createElement('div');
        card.className = 'viz-card';
        
        const complexityItems = Object.entries(ds.complexity)
            .map(([key, value]) => `
                <div class="complexity-item">
                    <span class="complexity-label">${key}</span>
                    <span>${value}</span>
                </div>
            `).join('');
        
        const uniqueId = `${gridElement.id}-${index}`;
        
        card.innerHTML = `
            <div class="viz-video-container" id="video-container-${uniqueId}">
                <video class="viz-video" id="video-${uniqueId}" loop muted playsinline>
                    <source src="${ds.videoPath}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="viz-video-placeholder" id="placeholder-${uniqueId}">
                    <div class="placeholder-icon">${ds.icon}</div>
                    <p>Video not available</p>
                    <p class="placeholder-hint">Add ${ds.videoPath}</p>
                </div>
            </div>
            <div class="viz-content">
                <h3 class="viz-title">${ds.name}</h3>
                <p class="viz-description">${ds.description}</p>
                <div class="viz-complexity">
                    ${complexityItems}
                </div>
            </div>
        `;
        
        gridElement.appendChild(card);
        
        // Setup video loading and error handling
        setTimeout(() => {
            setupVideo(uniqueId);
        }, 100);
    });
}

// Setup video with error handling and hover effects
function setupVideo(index) {
    const video = document.getElementById(`video-${index}`);
    const placeholder = document.getElementById(`placeholder-${index}`);
    const container = document.getElementById(`video-container-${index}`);
    
    if (!video || !placeholder || !container) return;
    
    // Check if video can be loaded
    video.addEventListener('loadeddata', function() {
        // Video loaded successfully
        video.style.display = 'block';
        placeholder.style.display = 'none';
    });
    
    video.addEventListener('error', function() {
        // Video failed to load
        video.style.display = 'none';
        placeholder.style.display = 'flex';
        placeholder.style.flexDirection = 'column';
        placeholder.style.justifyContent = 'center';
        placeholder.style.alignItems = 'center';
        placeholder.style.height = '100%';
    });
    
    // Auto-play on hover
    container.addEventListener('mouseenter', function() {
        if (video.readyState >= 2) { // Video is loaded enough to play
            video.play().catch(err => {
                // Autoplay might be blocked, that's okay
                console.log('Autoplay prevented:', err);
            });
        }
    });
    
    container.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0; // Reset to beginning
    });
    
    // Click to enlarge video
    container.addEventListener('click', function() {
        const videoPath = video.querySelector('source').src;
        const cardElement = container.closest('.viz-card');
        const title = cardElement.querySelector('.viz-title').textContent;
        openVideoModal(videoPath, title);
    });
    
    // Try to load the video
    video.load();
}

// Video Modal Functions
function openVideoModal(videoPath, title) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');
    const modalTitle = document.getElementById('modalTitle');
    
    modalTitle.textContent = title;
    modalVideoSource.src = videoPath;
    modalVideo.load();
    modal.style.display = 'flex';
    
    // Play the video
    setTimeout(() => {
        modalVideo.play().catch(err => {
            console.log('Autoplay prevented in modal:', err);
        });
    }, 100);
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modal.style.display = 'none';
}

// Utility Functions
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    generateCards();
    
    // Setup modal close events
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.video-modal-close');
    
    // Close button click
    closeBtn.addEventListener('click', closeVideoModal);
    
    // Click outside modal to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeVideoModal();
        }
    });
});

// Handle smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});