import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';


interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string ,location?: string | undefined, binType?: string | undefined) => void;
  type?: 'smart-bins' | 'rfid-tags' | 'tags';
}


const InputModal: React.FC<InputModalProps> = ({ isOpen, onClose, onSave, type }) => {
  const [value, setValue] = useState('');
  const [location, setLocation] = useState('');
  const [binType, setBinType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleBinTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinType(e.target.value);
  };

  const handleSubmit = () => {
    onSave(value, location, binType);
    onClose();
  };

  let modalTitle = 'Register';
  let inputLabel = 'Input Value:';

  if (type === 'smart-bins') {
    modalTitle = 'Register Smart Bins';
    inputLabel = 'Smart Bin ID:';
  } else if (type === 'rfid-tags') {
    modalTitle = 'Register RFID Tags';
    inputLabel = 'RFID Tag ID:';
  } else if (type === 'tags') {
    modalTitle = 'Register Tags';
    inputLabel = "Tag/Card ID : ";
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="fixed inset-0 flex items-center justify-center" ariaHideApp={false}>
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">{modalTitle}</h2>
        <label htmlFor="inputValue" className="block mb-2">{inputLabel}</label>
        <input id="inputValue" type="text" value={value} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 mb-4 w-full" />
        {type === 'smart-bins' && (
          <>
            <label htmlFor="location" className="block mb-2">Location:</label>
            <input id="location" type="text" value={location} onChange={handleLocationChange} className="border border-gray-300 rounded px-3 py-2 mb-4 w-full" />
            <label htmlFor="binType" className="block mb-2">Type:</label>
            <input id="binType" type="text" value={binType} onChange={handleBinTypeChange} className="border border-gray-300 rounded px-3 py-2 mb-4 w-full" />
          </>
        )}
        <div className="flex justify-end">
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-2 rounded">Save</button>
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default InputModal;