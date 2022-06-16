const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

function eventBubbling() {
  grandparent.addEventListener('click', (e) => {
    console.log('grandparent bubble');
  });

  parent.addEventListener('click', (e) => {
    console.log('parent bubble');
  });

  child.addEventListener('click', (e) => {
    console.log('child bubble');
  });
}

function eventCapturing() {
  grandparent.addEventListener(
    'click',
    (e) => {
      console.log('grandparent capture');
    },
    { capture: true }
  );

  parent.addEventListener(
    'click',
    (e) => {
      console.log('parent capture');
    },
    { capture: true }
  );

  child.addEventListener(
    'click',
    (e) => {
      console.log('child capture');
    },
    { capture: true }
  );
}

function stopEventBubbling() {
  grandparent.addEventListener('click', (e) => {
    console.log('grandparent clicked');
  });

  parent.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('parent clicked but stop bubbling');
  });

  child.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('child clicked but stop bubbling');
  });
}

function runEventOnlyOnce() {
  child.addEventListener(
    'click',
    (e) => {
      console.log('child clicked and run only once');
    },
    { once: true }
  );
}

function addGlobalEventLister(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

// 可以選擇性註解掉觀察變化
eventBubbling();
// eventCapturing();
// stopEventBubbling();
// runEventOnlyOnce();
// addGlobalEventLister('click', 'div', (e) => console.log('hi'));
