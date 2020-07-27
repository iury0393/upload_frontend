import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="" />
        <div>
          <strong></strong>
          <span> <button onClick={() => {}}>Exluir</button></span>
        </div>
      </FileInfo>
      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24},
            path: { stroke: '#7159C1'}
          }}
          strokeWidth={10}
          percentage={60}
        />

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>

        <MdCheckCircle size={24} color="#78E5D5" />
        <MdError size={24} color="#E57878" />
      </div>
    </li>
  </Container>

);

export default FileList;