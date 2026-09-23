import { APP_ZIP_BASE64 } from '../data/appZipBase64';

export function downloadAppZip() {
  try {
    const byteCharacters = atob(APP_ZIP_BASE64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cuoc-thi-bien-gioi-lang-son.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  } catch (error) {
    console.error('Lỗi khi tải tệp zip:', error);
    // Fallback: direct navigation
    window.location.href = '/cuoc-thi-bien-gioi-lang-son.zip';
  }
}
