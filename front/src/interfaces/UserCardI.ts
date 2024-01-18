/**
 * File: /src/interfaces/UserCardI.ts
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Wed Jan 17 2024
 * Modified By: liber4lis
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

export interface UserCardI {
  nom: string;
  prenom: string;
  poste: string;
  equipe: string;
  agence: string;
  photo_pro?: string;
  photo_fun?: string;
  [key: string]: string | undefined;
}
