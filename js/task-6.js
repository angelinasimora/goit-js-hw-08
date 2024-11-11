function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, 0)}`;
        }

        const controls = document.getElementById('controls');
        const input = controls.querySelector('input');
        const createBtn = controls.querySelector('[data-create]');
        const destroyBtn = controls.querySelector('[data-destroy]');
        const boxesContainer = document.getElementById('boxes');

        function createBoxes(amount) {
            const boxes = [];
            for (let i = 0; i < amount; i++) {
                const boxSize = 30 + i * 10;
                const box = document.createElement('div');
                box.style.width = `${boxSize}px`;
                box.style.height = `${boxSize}px`;
                box.style.backgroundColor = getRandomHexColor();
                boxes.push(box);
            }
            boxesContainer.append(...boxes);
        }

        function destroyBoxes() {
            boxesContainer.innerHTML = '';
        }

        createBtn.addEventListener('click', () => {
            const amount = Number(input.value);
            if (amount < 1 || amount > 100) {
                return;
            }
            destroyBoxes();
            createBoxes(amount);
            input.value = '';
        });

        destroyBtn.addEventListener('click', destroyBoxes);