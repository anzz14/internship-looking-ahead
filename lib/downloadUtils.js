// Download utilities for resource files

export const downloadResource = (filename, displayName = null) => {
  try {
    // Create a link element
    const link = document.createElement('a');
    link.href = `/resources/${filename}`;
    link.download = displayName || filename;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Track download event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download', {
        event_category: 'Resources',
        event_label: filename,
      });
    }
    
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    
    // Fallback: open in new tab
    window.open(`/resources/${filename}`, '_blank');
    return false;
  }
};

export const downloadResourcePack = () => {
  return downloadResource('ADHD-Resource-Pack.pdf', 'ADHD Resource Pack.pdf');
  // 👆 Change 'ADHD-Resource-Pack.pdf' to your actual filename
};

export const downloadTeachingStrategies = () => {
  return downloadResource('Teaching-Strategies.pdf', 'Teaching Strategies Guide.pdf');
  // 👆 Change 'Teaching-Strategies.pdf' to your actual filename
};

export const downloadAssessmentTools = () => {
  return downloadResource('Assessment-Tools.pdf', 'Assessment Tools Collection.pdf');
  // 👆 Change 'Assessment-Tools.pdf' to your actual filename
};

// ADD YOUR OWN DOWNLOAD FUNCTIONS HERE:
// Example:
// export const downloadMyCustomResource = () => {
//   return downloadResource('My-Custom-File.pdf', 'My Custom Resource.pdf');
// };

// For multiple files, you can create specific functions:
// export const downloadClassroomGuide = () => {
//   return downloadResource('Classroom-Management-Guide.pdf', 'Classroom Management Guide.pdf');
// };
// 
// export const downloadParentHandbook = () => {
//   return downloadResource('Parent-Handbook.pdf', 'Parent Handbook.pdf');
// };

// Check if file exists before attempting download
export const checkFileExists = async (filename) => {
  try {
    const response = await fetch(`/resources/${filename}`, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('File check failed:', error);
    return false;
  }
};

// Enhanced download with file existence check
export const safeDownloadResource = async (filename, displayName = null) => {
  const exists = await checkFileExists(filename);
  
  if (!exists) {
    alert('Sorry, this resource is currently unavailable. Please try again later or contact support.');
    return false;
  }
  
  return downloadResource(filename, displayName);
};
