import Head from 'next/head';
import { useState } from 'react';
import { SearchButton } from '../components/SeachButton';
import { Upload } from '../components/Upload';
import { FileList } from '../components/FileList';
import { uniqueId } from 'lodash';
import filesize from 'filesize'

import styles from './home.module.scss'

export default function Home() {
  const [uploadFiles, setUploadFiles] = useState([]);

  function handleUpload(files: any) {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      progress: 0,
      uploaded: false,
      error: false,
    }))

    setUploadFiles(uploadedFiles);
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 </span><span>Hey, welcome</span>
          <p>
            Faça o upload do arquivo no formato .xlsx no campo abaixo <br />
          </p>
          <Upload onUpload={handleUpload} />
          { !!uploadFiles.length && (
            <FileList files={uploadFiles}/>
          )}
          <SearchButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}