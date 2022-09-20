import React, { HTMLProps } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { filterProps, setDefaultClasses } from '../../utils/props'
import { Button } from '../../components/Button'
import * as styles from './EntryText.module.scss'

type EntryTextProps = HTMLProps<HTMLDivElement>

export function EntryText(props: EntryTextProps) {
  const htmlProps = filterProps(props, [])
  setDefaultClasses(htmlProps, [styles.container])
  return (
    <div {...htmlProps}>
      <h1>{"Funkin' it forward"}</h1>
      <p>
        Just a race car driving yeti with a secret recording studio somewhere
        for some reason.
      </p>
      <p>Take a look at our new album release</p>
      <div className={[styles.row, styles.buttons].join(' ')}>
        <Button fill href="#">
          <div className={styles.row}>
            <p>Watch Video</p>
            <BsPlayCircle className={styles.icon} />
          </div>
        </Button>
        <Button href="#">Listen on Soundcloud</Button>
      </div>
    </div>
  )
}