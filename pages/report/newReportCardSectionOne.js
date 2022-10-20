import React from 'react'
import Link from 'next/link'

export default function NewReportCardSectionOne() {
  return (
    <div>
      This is Ewans Component<br/>

    <Link href='/report/newReportCard'>
      <a>
        LINK BACK TO MAIN COMPONENT
      </a>
    </Link>
    </div>
  )
}
