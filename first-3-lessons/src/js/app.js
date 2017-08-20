import '../css/style.css';
import '../css/input-elements.css';
import { secretParagraph, secretButton } from './dom-loader';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretPragraph();

function toggleSecretState() {
  showSecret = !showSecret;
  updateSecretPragraph();
  updateSecretButton();
}

function updateSecretButton() {
  if (showSecret) {
    secretButton.textContent = 'Hide the Secret';
  } else {
    secretButton.textContent = 'Show the Secret';
  }
}

function updateSecretPragraph() {
  if (showSecret) {
    secretParagraph.style.display = 'block';
  }else {
    secretParagraph.style.display = 'none';
  }
}
