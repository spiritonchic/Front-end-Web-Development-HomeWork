import React from 'react';
import SocialIcon from './SocialIcon';

import telegramLogo from '../assets/img/telegram.png';
import githubLogo from '../assets/img/github.png';
import mailLogo from '../assets/img/mail.png';
import codeforcesLogo from '../assets/img/codeforces.png';

const SocialIcons: React.FC = () => (
    <div className="social-icons">
        <SocialIcon href="https://t.me/spiritonchic" imgSrc={telegramLogo} alt="Telegram" id="tg-link" />
        <SocialIcon href="https://github.com/spiritonchic" imgSrc={githubLogo} alt="Github" id="gh-link" />
        <SocialIcon href="mailto:vanya.ershov.05@mail.ru" imgSrc={mailLogo} alt="Mail" id="email" />
        <SocialIcon href="https://codeforces.com/profile/spiriton?mobile=false" imgSrc={codeforcesLogo} alt="Codeforces" id="cf-link" />
    </div>
);

export default SocialIcons;
