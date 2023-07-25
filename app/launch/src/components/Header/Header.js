// Header.js
import React from 'react'

import {ReactComponent as MicronautLaunchLogo} from '../../images/grails-forge.svg'

const Header = () => {

    return (
        <div className="mn-header">
            <div className="logo-wrapper">
                <div className="container">
                    <a href="https://grails.org">
                        <MicronautLaunchLogo className="mn-logo micronaut-launch-logo"/>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Header
