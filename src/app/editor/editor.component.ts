/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { Component} from '@angular/core';
import type { Editor } from '@ckeditor/ckeditor5-core';
// import * as CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';

import { CommentsIntegration, appData } from '../comment-integration/CommentsIntegration';


@Component( {
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: [ './editor.component.css' ]
} )
export class EditorComponent {

	public Editor = CustomEditor;


	public get editorConfig() {
		return {
			comments: {
				editorConfig: {
					// extraPlugins: [ Bold, Italic, Underline, List, Autoformat ]
				}
			},
			initialData: appData.initialData,
			extraPlugins: [CommentsIntegration],
			licenseKey: "bDFjNUVNSFljZmtmV0NNbko4cCtwOUxKT0JXUHBGUWY4RnFSZEpJK1ovVVF1YkZlUmpNY0s2aXluM1NvLU1qQXlNekV5TWpBPQ==",
		};
	}

	public onReady( editor: Editor ): void {
		console.log("Ready!")
	}
}


