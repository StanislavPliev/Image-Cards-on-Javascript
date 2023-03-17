const itemNode = document.querySelector('.item');
const placeholdersNode = document.querySelectorAll('.placeholder');

itemNode.addEventListener('dragstart', dragstart);
itemNode.addEventListener('dragend', dragend);

for (const placeholder of placeholdersNode) {
  placeholder.addEventListener('dragover', dragover); // вызывается тогда элемент находится над placeholder куда мы можем его поместить
  placeholder.addEventListener('dragenter', dragenter); // вызывается когда элемент заходит на территорию placeholder
  placeholder.addEventListener('dragleave', dragleave); // вызывается когда мы элемент перетащили, но вышли за рамки территории placeholder
  placeholder.addEventListener('drop', dragdrop); // вызывается когда мы отпустили элемент 
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hidden'), 0)
}

function dragend(event) {
  event.target.className = 'item'; // добавили только класс item
  // то же самое что и event.target.classList.remove('hold', 'hidden');
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add('hovered');
}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

function dragdrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(itemNode);
}