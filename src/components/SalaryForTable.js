import React, { useState } from 'react';
import { Button, Image, InputNumber } from 'antd';

const SalaryForTable = () => {
  const [visible, setVisible] = useState(false);
  const [scaleStep, setScaleStep] = useState(0.5);

  return (
    <div>
      <div>
      </div>
      <br />
      <Button type="primary" onClick={() => setVisible(true)}>
        show image preview
      </Button>
      <Image
        width={200}
        style={{ display: 'none' }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
        preview={{
          visible,
          scaleStep,
          src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </div>
  )
}

export default SalaryForTable;
