/**
 * File: /src/interfaces/UserCardI.ts
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: Nathan Coquelin
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
  description: string;
  note: string;
  visited: string;
  [key: string]: string | undefined;
}
