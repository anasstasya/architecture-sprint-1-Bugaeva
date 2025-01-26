import '../blocks/places/places.css';

function AddPlaceButton() {
  function onAddPlace() {
    dispatchEvent(new CustomEvent("_cards-add-place-popup-open"));
  }

  return (
    <button className="places__add-button" type="button" onClick={onAddPlace}></button>
  );
}

export default AddPlaceButton;
