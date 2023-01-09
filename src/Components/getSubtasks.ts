const getModelInfo = (item: any) => {
  // get date timestamp
  item = item.data();

  // const timestamp = {
  //   nanoseconds: item.createdAt.nanoseconds,
  //   seconds: item.createdAt.seconds,
  // };

  // const date = new Date(timestamp.seconds * 1000);
  // const dateDay = date.getDate();
  // const dateMonth = date.getMonth();
  // const dateYear = date.getFullYear();
  // const dateHour = date.getHours();
  // const dateMinutes = date.getMinutes();

  // create Elements
  // const message = document.createElement('p');
  // message.className = 'message';
  const newElement = document.createElement('button');
  newElement.setAttribute('id', 'myBtn');
  newElement.className = 'subtaskBtn';
  newElement.innerHTML = item.title;

  newElement.addEventListener('click', () => {
    // Create the modal element
    const modal = document.createElement('div');
    modal.setAttribute('id', 'myModal');
    modal.className = 'modal';

    // create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // create modal title and close button
    modalContent.appendChild(
      Elements.createP({
        className: 'close',
        textContent: 'X',
      }),
    );
    modalContent.appendChild(
      Elements.createP({
        className: 'modal-title',
        textContent: item.title,
      }),
    );

    // create modal form
    const modalForm = document.createElement('div');
    modalForm.className = 'modal-form';

    modalForm.appendChild(
      Elements.createP({
        className: 'modal-label',
        textContent: 'Description:',
      }),
    );

    // modalForm.appendChild(
    //   Elements.createTextarea({
    //     className: 'modal-input-description',
    //     id: 'description',
    //     type: 'text',
    //     placeholder: item.description,
    //   }),
    // );
    modalForm.appendChild(
      Elements.createP({
        className: 'modal-input',
        textContent: item.description,
      }),
    );

    modalForm.appendChild(
      Elements.createP({
        className: 'modal-label',
        textContent: 'Deadline:',
      }),
    );
    modalForm.appendChild(
      Elements.createInput({
        className: 'modal-input',
        id: 'deadline',
        type: 'date',
      }),
    );

    modalForm.appendChild(
      Elements.createP({
        className: 'modal-label',
        textContent: 'Questions:',
      }),
    );

    modalForm.appendChild(
      Elements.createInput({
        className: 'modal-input',
        id: 'questions',
        type: 'text',
      }),
    );

    modalForm.appendChild(
      Elements.createP({
        className: 'modal-label',
        textContent: 'Check if completed:',
      }),
    );

    modalForm.appendChild(
      Elements.createInput({
        className: 'modal-input',
        id: 'completed',
        type: 'checkbox',
      }),
    );
    modalForm.appendChild(
      Elements.createButton({
        className: 'modal-button',
        id: 'save-button',
        textContent: 'save',
      }),
    );

    modalContent.appendChild(modalForm);

    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Get the 'close' button
    const closeButton = modal.querySelector('.close');

    // Add a click event listener to the 'close' button
    closeButton?.addEventListener('click', () => {
      // Hide the modal
      modal.style.display = 'none';
    });

    // Add a click event listener to the modal background
    modal.addEventListener('click', (event) => {
      // If the user clicked on the modal background (not the modal content), hide the modal
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Display the modal
    modal.style.display = 'block';
  });

  // get the item data throught id
  document.getElementById('showSubtask')?.appendChild(newElement);
  return newElement;
};