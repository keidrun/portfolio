// @flow
import React from 'react';

type Props = {
  title: string,
  link: string,
  target: string,
};

const SocialBtn = ({ title, link, target }: Props) => (
  <a
    href={link}
    target={target || '_self'}
    rel="noopener noreferrer"
    className="my-socsial-btn btn btn-sm btn-outline-light"
  >
    {title}
  </a>
);

export default SocialBtn;
