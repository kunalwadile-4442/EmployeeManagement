import React, { forwardRef } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

const Scrollbar = forwardRef((props, ref) => {
  const renderTrack = ({ style, ...props }) => {
    const trackStyle = {
      display: 'none',
    };
    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };

  return (
    <Scrollbars
      style={props?.style}
      renderView={(viewProps) => (
        <div {...viewProps} style={{ ...viewProps?.style, paddingRight: 1 }} className="view" />
      )}
      renderThumbVertical={(thumbProps) => <div {...thumbProps} className="thumb-view" />}
      className="ScrollbarsSidebar"
      ref={ref} 
      autoHide={props?.autoHide}
      autoHideTimeout={props?.autoHideTimeout}
      autoHideDuration={props?.autoHideDuration}
      onScrollFrame={props?.onScrollFrame}
    >
      {props?.children}
    </Scrollbars>
  );
});

export default Scrollbar;
