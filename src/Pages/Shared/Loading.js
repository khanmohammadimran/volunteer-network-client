import React from 'react';

const Loading = () => {
    return (
        <div class="flex items-center justify-center ">
            <div class="w-16 h-16 border-b-2 border-[#3F90FC] rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;

// import React from 'react';
// import { useState, CSSProperties } from "react";
// import PropagateLoader from "react-spinners/PropagateLoader";

// const Loading = () => {
//     const override: CSSProperties = {
//         display: "block",
//         margin: "0 auto",
//         borderColor: "red",
//     };
//     return (
//         <div>
//             <PropagateLoader
//                 cssOverride={override}
//                 size={10}
//                 aria-label="Loading Spinner"
//                 data-testid="loader"
//             />
//         </div>
//     );
// };

// export default Loading;