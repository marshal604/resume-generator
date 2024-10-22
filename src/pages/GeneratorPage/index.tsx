import React from 'react';

const GeneratorPage: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Editor</h2>
        {/* 在這裡放置編輯欄位 */}
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Preview</h2>
        {/* 在這裡放置預覽內容 */}
      </div>
    </div>
  );
};

export default GeneratorPage;