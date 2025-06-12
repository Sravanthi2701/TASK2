// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = 'Thank you! Your message has been sent.';
  this.reset();
});

// To-Do List Logic
function addTask() {
  const input = document.getElementById('todoInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
