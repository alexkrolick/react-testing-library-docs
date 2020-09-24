/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const ExternalLink = props => (
  <a target="_blank" rel="noreferrer noopener" {...props} />
)
const Link = props => <a {...props} />

function Help(props) {
  const { config: siteConfig, language = '' } = props
  const { baseUrl, docsUrl } = siteConfig
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  const supportLinks = [
    {
      content: `Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/react-testing-library)`,
      title: 'Stack Overflow',
    },
    {
      content:
        'Discuss issues with community members on [Spectrum](https://spectrum.chat/testing-library)',
      title: 'Spectrum',
    },
    {
      content: `Chat on [Discord](https://discord.gg/c6JN9fM)`,
      title: 'Discord',
    },
    {
      content: `Stay up to date by following the [blog](${props.config.baseUrl}blog)`,
      title: 'Blog',
    },
    {
      content: `Browse [Learning Material](/docs/learning)`,
      title: 'Resources',
    },
    {
      content: `Get support on [GitHub](${props.config.repoUrl})`,
      title: 'GitHub',
    },
  ]

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer helpContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <GridBlock
            contents={supportLinks}
            layout="threeColumn"
            align="left"
          />
          <section>
            <h2 align="center">Buy a Course</h2>
            <p align="center">
              Learn how to test JavaScript with{' '}
              <ExternalLink href="https://kentcdodds.com">
                Kent C. Dodds
              </ExternalLink>
              , the creator of Testing Library, on{' '}
              <ExternalLink href="https://testingjavascript.com">
                TestingJavaScript.com
              </ExternalLink>
            </p>
            <div align="center">
              <ExternalLink href="https://testingjavascript.com">
                <img
                  width="500"
                  alt="TestingJavaScript.com Learn the smart, efficient way to test any JavaScript application."
                  src={`${baseUrl}img/testingjavascript.jpg`}
                />
              </ExternalLink>
            </div>
          </section>
          <header className="postHeader">
            <h1>Want to help?</h1>
          </header>
          <p>
            Thanks! The Testing Library maintainers are happy to maintain this
            library along with you, the community. We aren't looking for
            funding, but we need everyone to pitch in to make this project and
            community successful and improve tests for everyone in the long run.
          </p>
          <p>
            Please consider helping us answer community questions and update
            documentation content via the help links above. You can also help
            support{' '}
            <ExternalLink href="https://kentcdodds.com">
              Kent C. Dodds
            </ExternalLink>{' '}
            financially by purchasing his{' '}
            <ExternalLink href="https://kentcdodds.com/courses">
              courses
            </ExternalLink>{' '}
            or{' '}
            <ExternalLink href="https://kentcdodds.com/workshops/">
              remote workshops
            </ExternalLink>
            .
          </p>
        </div>
      </Container>
    </div>
  )
}

module.exports = Help