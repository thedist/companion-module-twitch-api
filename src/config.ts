import { SomeCompanionConfigField } from '../../../instance_skel_types'

export interface Config {
  tokenServer: boolean
  token: string
  customServerURL: string
  channels: string
}

export const getConfigFields = (): SomeCompanionConfigField[] => {
  return [
    {
      type: 'text',
      id: 'info',
      width: 12,
      label: 'Information',
      value: `This module supports both using a token server to securely store/refresh tokens, or using local tokens which expire every 4 hours.
				<br /><br />
				Generate a token for either the <a href="https://companion.dist.dev/" target="_blank">Token Server</a> or 
				<a href="https://companion.dist.dev/?type=implicit" target="_blank">Local Token</a>
				<br /><br />
				If you wish to run your own token server please refer to the <a href="https://github.com/bitfocus/companion-module-twitch-api/blob/master/tokenServer.md" target="_blank">
				Token Server Guide</a>, otherwise leave the custom token server URL field blank.`,
    },
    {
      type: 'checkbox',
      label: 'Token Server',
      id: 'tokenServer',
      width: 2,
      default: true,
    },
    {
      type: 'textinput',
      label: 'Access Token or Token server ID',
      id: 'token',
      width: 10,
    },
    {
      type: 'textinput',
      label: 'Custom token server URL',
      id: 'customServerURL',
      width: 12,
      default: '',
    },
    {
      type: 'textinput',
      label: 'Channels to monitor - Space separated',
      id: 'channels',
      width: 12,
    },
  ]
}
