fetch('beats.json')
  .then(response => response.json())
  .then(data => {
    const container = document.createElement('div');
    container.id = 'beat-list';

    data.forEach(beat => {
      const beatDiv = document.createElement('div');
      beatDiv.style.marginBottom = '20px';

      const title = document.createElement('h3');
      title.textContent = beat.title;

      const desc = document.createElement('p');
      desc.textContent = beat.description;

      const audio = document.createElement('audio');
      audio.controls = true;
      audio.src = beat.file;

      beatDiv.appendChild(title);
      beatDiv.appendChild(desc);
      beatDiv.appendChild(audio);

      container.appendChild(beatDiv);
    });

    document.body.appendChild(container);
  })
  .catch(error => {
    console.error('Error loading beats:', error);
    const err = document.createElement('p');
    err.textContent = 'Could not load beat list.';
    document.body.appendChild(err);
  });
